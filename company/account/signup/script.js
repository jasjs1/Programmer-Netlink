const form = document.querySelector('form');
const companyNameInput = document.getElementById('comp-name');
const companyEmailInput = document.getElementById('comp-email');
const companyPasswordInput = document.getElementById('comp-password');
const companyLogoInput = document.getElementById('comp-logo');

form.addEventListener('submit', function(event) {

  event.preventDefault();

  // Convert image to Base64 string
  const fileReader = new FileReader();
  fileReader.onload = function(event) {
    const companyLogoBase64 = event.target.result;

    // Store data in localStorage
    localStorage.setItem('comp-name', companyNameInput.value);
    localStorage.setItem('comp-email', companyEmailInput.value);
    localStorage.setItem('comp-password', companyPasswordInput.value);
    localStorage.setItem('comp-logo', companyLogoBase64);

    // Redirect to company app
    window.location.href = 'http://127.0.0.1:5500/company/.app/company-app.html';
  }
  fileReader.readAsDataURL(companyLogoInput.files[0]);
});
