const scriptURL = 'https://script.google.com/macros/s/AKfycbz98zgfEWJe36UIf3H4KqrxDAkhFYnJBoMaR530vNc-j3GbGhN_1OdKnNlmAO7CWuuD/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
