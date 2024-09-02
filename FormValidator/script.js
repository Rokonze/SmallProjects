const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

function showError (input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess (input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}


function checkRequired (inputArr) {
    inputArr.forEach(function (input) {
        if(input.value.trim() === '')
        {
            showError(input, `${input.id.charAt(0).toUpperCase() + input.id.slice(1)} is required`);
        } else {
            showSuccess(input);
        }
        
    })
}

function checkLength(input, min, max )
{
    if(input.value.length < min)
    {
        showError(input, `${input.id.charAt(0).toUpperCase() + input.id.slice(1)} must be at least ${min} characters`);
    } else if(input.value.length > max)
    {
        showError(input, `${input.id.charAt(0).toUpperCase() + input.id.slice(1)} must be less than ${max} characters`);
    } else {
        showSuccess(input);
    }
}

function checkEmail(input) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(re.test(input.value)) {
        showSuccess(input);
    } else {
        showError(input, 'Email is not valid');
    }
}

function checkPasswordsMatch(input1, input2){
    if(input1.value !== input2.value) {
        showError(input2, 'Passwords do not match');
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 8, 16);
    checkEmail(email);
    checkPasswordsMatch(password, password2);
} )




