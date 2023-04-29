const form = document.querySelector('form');
const companyNameInput = document.getElementById('comp-name');
const companyEmailInput = document.getElementById('comp-email');
const companyPasswordInput = document.getElementById('comp-password');


form.addEventListener('submit', function(event) {

  event.preventDefault();

  localStorage.setItem('comp-name', companyNameInput.value);
  localStorage.setItem('comp-email', companyEmailInput.value);
  localStorage.setItem('comp-password', companyPasswordInput.value);

  window.location.href = 'http://127.0.0.1:5500/company/.app/company-app.html';
});
