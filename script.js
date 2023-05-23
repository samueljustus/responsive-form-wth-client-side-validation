const form = document.querySelector('form');
const userName = document.querySelector('#name');
const company = document.querySelector('#company')
const email = document.querySelector('#email')
const phoneNumber = document.querySelector('#phone');

form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInputs();
})


function checkInputs() {
    const nameValue = userName.value.trim()
    const companyValue = company.value.trim()
    const emailValue = email.value.trim()
    const phoneNumberValue = phoneNumber.value.trim()

    if (nameValue === '') {
        setErrorFor(userName, 'name cannot be empty')
    } else {
        setSuccessFor(userName)
    }
     if (companyValue === '') {
        setErrorFor(company, 'company name cannot be empty')
     }
     else {
        setSuccessFor(company);
     }
     if (emailValue === '') {
        setErrorFor(email, 'email cannot be empty')
     } 
     else if (!isEmail(emailValue)) {
        setErrorFor(email, 'email is not valid')
     } else {
        setSuccessFor(email)
     }
     if (phoneNumberValue === '') {
        setErrorFor(phoneNumber, 'phone number cannot be empty')
     }
     else if (isNaN(phoneNumberValue)) {
        setErrorFor(phoneNumber, 'please enter a correct number')
     }

     else if (phoneNumberValue < 11) {
        setErrorFor(phoneNumber, 'phone number cannot be less than 11')
     }
     else {
        setSuccessFor(phoneNumber)
     }
} 



function setErrorFor(input, message) {
    const parentElementOfInput = input.parentElement
    const small = parentElementOfInput.querySelector('small') // add error message inside small tag

    small.innerText = message
    parentElementOfInput.className = 'error' 
}

function setSuccessFor(input) {
    const parentElementOfInput = input.parentElement
    parentElementOfInput.className = 'success'
}

function isEmail(email) {
   return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


