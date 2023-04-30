const companyUsername = document.getElementById('comp-username');
const companyTechStack = document.getElementById('comp-tech-stack');

form.addEventListener('submit', function(event) {

  event.preventDefault();

  // Convert image to Base64 string
  const fileReader = new FileReader();
  fileReader.onload = function(event) {
    const companyLogoBase64 = event.target.result;

    localStorage.setItem('comp-username', companyUsername.value)
    localStorage.setItem('comp-tech-stack', companyTechStack.value)

    // Redirect to company app
    window.location.href = 'http://127.0.0.1:5500/company/.app/company-app.html';
  }
});


function redirectToCompanyApp() {
      window.location.href = 'http://127.0.0.1:5500/company/.app/company-app.html';
}