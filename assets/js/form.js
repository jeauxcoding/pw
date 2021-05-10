window.addEventListener('load', (event) => {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzaEe_ba9hfMMyLMj8Nw2NwqvIkqD4-9g9j5m8olTF7Ew9TanR1/exec'
    const form = document.forms['submit-to-google-sheet']

    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
    })
});
