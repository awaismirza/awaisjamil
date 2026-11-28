const session = new URLSearchParams(window.location.search).get('session_id')
window.history.replaceState(null, '', window.location.pathname)

if (session && /^cs_live_[A-Za-z0-9]{1,200}$/.test(session)) {
  const input = document.getElementById('code')
  input.value = session
  document.getElementById('missing').hidden = true
  document.getElementById('details').hidden = false

  document.getElementById('copy').addEventListener('click', async () => {
    const feedback = document.getElementById('feedback')
    try {
      await navigator.clipboard.writeText(input.value)
      feedback.textContent = 'Code copied. Paste it into App Switch.'
    } catch {
      input.focus()
      input.select()
      feedback.textContent = 'Code selected. Use Copy on your device.'
    }
  })
}
