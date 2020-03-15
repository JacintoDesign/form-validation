const form = document.getElementById('signUpForm');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const message = document.getElementById('message-container');

form.addEventListener('submit', function(e) {
  // Prevent form from submitting
  e.preventDefault();
          // console.log(password1El.value);

  // Check to see if both password fields match
  let passwordsMatch = false;
  if (password1El.value === password2El.value) {
    passwordsMatch = true;
  } else {
    passwordsMatch = false;
  }

  // Use constraint API to check form validity
  let isValidForm = form.checkValidity();
              //console.log(isValidForm);

  // If the form isn't valid or if the passwords don't match
  if (isValidForm === false || passwordsMatch === false) {  
    // Style main message for an error 
    message.innerHTML = '<h3>Please fill out all fields.</h3>';
    message.style.display = 'flex';
    message.style.color = 'red';
    message.style.borderColor = 'red';
  } 
  // If form is valid and passwords match
  if (isValidForm === true && passwordsMatch === true) {
    // Style main message for success
    message.innerHTML = '<h3>Successfully Registered!</h3>';
    message.style.display = 'flex';
    message.style.color = 'green';
    message.style.borderColor = 'green';
  }
});
