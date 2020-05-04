
const scriptURL = 'https://script.google.com/macros/s/AKfycbyHMucel2BBlGsbwlFLsx19Km_EVSYUDWEJ7XCzSBBwMbnXLhel/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})
