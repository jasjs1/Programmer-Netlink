// Get the form and the input fields
const form = document.querySelector('form');
const companyNameInput = document.getElementById('comp-name');
const companyEmailInput = document.getElementById('comp-email');
const companyPasswordInput = document.getElementById('comp-password');

// Add an event listener to the form for when it's submitted
form.addEventListener('submit', function(event) {
  // Prevent the form from submitting normally
  event.preventDefault();

  // Save the input values to local storage
  localStorage.setItem('comp-name', companyNameInput.value);
  localStorage.setItem('comp-email', companyEmailInput.value);
  localStorage.setItem('comp-password', companyPasswordInput.value);

  // Optionally, display a message to confirm that the data was saved
  alert('Information saved!');
});
