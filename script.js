const form = document.getElementById('signUpForm');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

function storeFormData() {
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value,
  };
  // Do something with user data
  console.log(user);
}

function validateForm(e) {
  e.preventDefault();
  // Use HTML constraint API to check form validity
  const isValidForm = form.checkValidity();
  // If the form isn't valid
  if (!isValidForm) {
    // Style main message for an error
    message.textContent = 'Please fill out all fields.';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
  }
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
    messageContainer.style.borderColor = 'red';
    password1El.style.borderColor = 'red';
    password2El.style.borderColor = 'red';
    message.textContent = 'Make sure passwords match.';
  }
  // If form is valid and passwords match
  if (isValidForm && passwordsMatch) {
    // Style main message for success
    message.textContent = 'Successfully Registered!';
    message.style.color = 'green';
    messageContainer.style.borderColor = 'green';
    // Store User Data
    storeFormData();
  }
}

// Event Listener
form.addEventListener('submit', validateForm);
