const requestOptions = { cache: 'no-store', credentials: 'omit', redirect: 'error', referrerPolicy: 'no-referrer' }
const statuses = {
  active: 'Active. To unlock this Mac, open App Switch, choose Enter Code… and paste your activation code.',
  refunded: 'Refunded. This purchase no longer unlocks Unlimited. Contact support if this looks incorrect.',
  unknown: 'We could not verify this code. Check the original checkout confirmation. For a recent purchase, wait a moment and try again.',
}

async function submitLicenseRequest(operation, payload) {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), 15000)
  const options = { ...requestOptions, signal: controller.signal }
  try {
    const manifest = await fetch('/app-switch/licensing.json', options)
    if (!manifest.ok) throw new Error('Service unavailable')
    const service = new URL((await manifest.json()).serviceURL)
    if (service.protocol !== 'https:' || service.origin === window.location.origin ||
        service.username || service.password || service.search || service.hash) throw new Error('Invalid service URL')
    service.pathname = service.pathname.replace(/\/$/, '') + '/license/' + operation
    const response = await fetch(service, {
      ...options, method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    if (response.status === 429) return 'Too many requests. Wait a little before trying again.'
    if (response.status === 400) return 'Check the details you entered and try again.'
    if (response.status === 200 && operation === 'status') {
      const { status } = await response.json()
      if (Object.hasOwn(statuses, status)) return statuses[status]
    }
    if (response.status === 202 && operation === 'recover' && (await response.json()).accepted === true) {
      return 'If this email matches an active App Switch purchase, we’ll send its activation code to the address used at checkout. Check your spam folder too.'
    }
    throw new Error('Service unavailable')
  } finally {
    clearTimeout(timer)
  }
}

function setup(formId, fieldId, operation) {
  const form = document.getElementById(formId)
  const field = document.getElementById(fieldId)
  const submit = form.querySelector('button')
  const result = form.querySelector('[role="status"]')
  submit.disabled = false
  field.addEventListener('change', () => { field.value = field.value.trim() })
  form.addEventListener('submit', async (event) => {
    event.preventDefault()
    if (submit.disabled) return
    submit.disabled = true
    result.textContent = operation === 'status' ? 'Checking your code…' : 'Requesting recovery…'
    const value = field.value.trim()
    field.value = ''
    try {
      result.textContent = await submitLicenseRequest(operation, { [fieldId]: value })
    } catch {
      result.textContent = operation === 'recover'
        ? 'Email recovery is temporarily unavailable. Contact App Switch support with your checkout email and purchase date.'
        : 'License lookup is temporarily unavailable. Try again later or contact App Switch support.'
    } finally {
      submit.disabled = false
    }
  })
  window.addEventListener('pagehide', () => { field.value = ''; result.textContent = '' })
}

setup('status-form', 'code', 'status')
// Enable only after an end-to-end recovery email has been verified.
if (document.getElementById('recovery').dataset.emailRecovery === 'enabled') {
  document.getElementById('recovery-form').hidden = false
  document.getElementById('manual-recovery').hidden = true
  setup('recovery-form', 'email', 'recover')
}
