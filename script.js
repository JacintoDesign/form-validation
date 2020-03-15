const form = document.getElementById('signUpForm');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const message = document.getElementById('message-container');
const email = document.getElementById('email');

form.addEventListener('submit', function(e) {
  // Prevent form from submitting
  e.preventDefault();

  // Use HTML constraint API to check form validity
  let isValidForm = form.checkValidity();
//console.log(isValidForm);

  // If the form isn't valid
  if (isValidForm === false) {  
    // Style main message for an error 
    message.innerHTML = '<h3>Please fill out all fields.</h3>';
    message.style.color = 'red';
    message.style.borderColor = 'red';
  } 

// console.log(password1El.value);
  // Check to see if both password fields match
  let passwordsMatch = false;
  if (password1El.value === password2El.value) {
    // If they match, set the border color of input to green
    passwordsMatch = true;
    password1El.style.borderColor = 'green';
    password2El.style.borderColor = 'green';
  } 
  if (password1El.value && password2El.value && password1El.value !== password2El.value) {
    // If they don't match, border color of input to red, change message
    passwordsMatch = false;
    message.style.color = 'red';
    message.style.borderColor = 'red';
    password1El.style.borderColor = 'red';
    password2El.style.borderColor = 'red';
    message.innerHTML = '<h3>Make sure passwords match.</h3>';
  }

  // If form is valid and passwords match
  if (isValidForm === true && passwordsMatch === true) {
    // Style main message for success
    message.innerHTML = '<h3>Successfully Registered!</h3>';
    message.style.color = 'green';
    message.style.borderColor = 'green';
  }
});