const scriptURL = 'https://script.google.com/macros/s/AKfycbxepd6BfVsFAllqbllz9aRhGAjCZf5-jOIMO4TlP2fqQQ9jW6u0474sfvgnqeaKhW9B/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})