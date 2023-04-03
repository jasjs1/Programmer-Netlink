const emailInput = document.querySelector('input[name="signup-email"]');
const passwordInput = document.querySelector('input[name="signup-password"]');
const nameInput = document.querySelector('input[name="name"]');
const saveButton = document.querySelector('#save');
    
saveButton.addEventListener('click', function() {
  localStorage.setItem('signup-email', emailInput.value);
  localStorage.setItem('signup-password', passwordInput.value);
  localStorage.setItem('user-name', nameInput.value);
});
    
const storedEmail = localStorage.getItem('signup-email');
const storedPassword = localStorage.getItem('signup-password');
const storedName = localStorage.getItem('user-name');
const userNameElem = document.querySelector('#user-name');

if (storedName) {
  userNameElem.textContent = storedName;
  const profileLink = document.createElement('a');
  profileLink.href = 'https://programmernetlink.com/profile/' + storedName;
  profileLink.textContent = 'Programmer Netlink Profile';
  userNameElem.insertAdjacentElement('afterend', profileLink);
} else {
  userNameElem.textContent = 'Unknown';
}
