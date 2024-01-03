const form = document.getElementById('form');
const pwd1 = document.getElementById('password1');
const pwd2 = document.getElementById('password2');
const msgContainer = document.querySelector('.message-container');
const msg = document.getElementById('message')
let isValid = false;
const validateForm = () => {
    isValid = form.checkValidity();
    msg.innerHTML = 'Please fill all the fields';
    msg.style.color = 'red';
}
const submitData = (event) => {
    event.preventDefault();
    validateForm();
}
form.addEventListener('submit', submitData);