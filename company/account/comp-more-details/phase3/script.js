const form = document.querySelector('form');
const githubURL = document.getElementById('github-url');
const linkedlnURL = document.getElementById('linkedln-url');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  localStorage.setItem('github-url', githubURL.value);
  localStorage.setItem('linkedln-url', linkedlnURL.value);
});

function redirectToCompanyApp() {
  window.location.href = 'http://127.0.0.1:5500/company/.app/company-app.html';
}
