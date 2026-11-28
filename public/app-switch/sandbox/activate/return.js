const code = new URLSearchParams(location.search).get('session_id');
history.replaceState(null, '', location.pathname);
if (/^cs_test_[a-zA-Z0-9]{16,200}$/.test(code || '')) {
  const field = document.getElementById('code');
  field.value = code;
  document.getElementById('missing').hidden = true;
  document.getElementById('details').hidden = false;
  document.getElementById('copy').addEventListener('click', async () => {
    const status = document.getElementById('status');
    try {
      await navigator.clipboard.writeText(field.value);
      status.textContent = 'Copied. Paste the code into App Switch Sandbox.';
    } catch {
      field.focus();
      field.select();
      status.textContent = 'Code selected. Press Command-C to copy.';
    }
  });
}
