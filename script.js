const scriptURL = 'https://script.google.com/macros/s/AKfycbx9xht5FCz_p8pRFhf2qZdI6tur9-eM8ipNdYla-cJVz0C2bnmRLC1Hz6vE8eWyM2-l/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thank you! your form is submitted successfully." ))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
})