const form = document.querySelector('form');
const companyUsername = document.getElementById('comp-username');
const companyTechStack = document.getElementById('comp-tech-stack');
const companyURL = document.getElementById('comp-url');
const hiring = document.getElementById('hiring');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Convert image to Base64 string
  const fileReader = new FileReader();
  fileReader.onload = function(event) {
    const companyLogoBase64 = event.target.result;

    localStorage.setItem('comp-username', companyUsername.value);
    localStorage.setItem('comp-tech-stack', companyTechStack.value);
    localStorage.setItem('comp-url', companyURL.value);
    localStorage.setItem('hiring', hiring.value);
  }

  fileReader.readAsDataURL(companyLogo.files[0]);
});

function redirectToCompanyApp() {
  window.location.href = 'http://127.0.0.1:5500/company/account/comp-more-details/phase3/more-details-ph3.html';
}
