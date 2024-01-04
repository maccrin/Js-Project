const form = document.getElementById('form');
const pwd1 = document.getElementById('password1');
const pwd2 = document.getElementById('password2');
const msgContainer = document.querySelector('.message-container');
const msg = document.getElementById('message')
let isValid = false;
let passwordConfirm = false;
const validateForm = () => {
    isValid = form.checkValidity();
    if (!isValid) {
        msg.innerHTML = 'Please fill all the fields';
        msg.style.color = 'red';
        return
    }
    if (pwd1.value === pwd2.value) {
        passwordConfirm = true;
        pwd1.style.borderColor = 'green';
        pwd2.style.borderColor = 'green';
        msg.style.color = 'green';
        msg.innerHTML = 'Passowrd match!!';
    }
    else {
        msg.innerHTML = 'Passowrd doesn\'t match';
        msg.style.color = 'red';
        pwd1.style.borderColor = 'red';
        pwd2.style.borderColor = 'red';
        return;

    }
    if (isValid && passwordConfirm) {
        msg.style.color = 'green'
        msg.innerHTML = 'Succefully Registered!';
    }
}
function storeFormData() {
    user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value
    }
}
const submitData = (event) => {
    event.preventDefault();
    validateForm();
    if (isValid && passwordConfirm) storeFormData()
}
form.addEventListener('submit', submitData);