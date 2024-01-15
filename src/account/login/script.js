
// Expose the on click fields

document.addEventListener("DOMContentLoaded", function() {
  var signupLink = document.getElementById("signup-link");
  var loginLink = document.getElementById("login-link");
  var signupDiv = document.getElementById("signup");
  var loginDiv = document.getElementById("login");

  signupLink.addEventListener("click", function() {
    signupDiv.style.display = "block";
    loginDiv.style.display = "none";
  });

  loginLink.addEventListener("click", function() {
    signupDiv.style.display = "none";
    loginDiv.style.display = "block";
  });
});

// end of Expose the on click fields


// rest of code:


function login() {
  const name = document.querySelector('input[name="signup-name"]');
  const emailInput = document.querySelector('input[name="signup-email"]');
  const passwordInput = document.querySelector('input[name="signup-password"]');
  const usernameInput = document.querySelector('input[name="username"]');
  const saveButton = document.querySelector('#save');
  const tagSelect = document.querySelector('#tag');
  
  saveButton.addEventListener('click', function() {
    localStorage.setItem('signup-name', name.value);
    localStorage.setItem('signup-email', emailInput.value);
    localStorage.setItem('signup-password', passwordInput.value);
    localStorage.setItem('username', usernameInput.value);
    localStorage.setItem('tag', tagSelect.value);
  });
  
  const storedName = localStorage.getItem('signup-name');
  const storedEmail = localStorage.getItem('signup-email');
  const storedPassword = localStorage.getItem('signup-password');
  const storedUsername = localStorage.getItem('username');
  const storedTag = localStorage.getItem('tag');
  
  const userNameElem = document.querySelector('#user-name');
  const tagSelectElem = document.querySelector('#tag');
  
  if (storedName) {
    userNameElem.textContent = storedName + "@" + storedTag + ".netlink";
    const profileLink = document.createElement('a');
    profileLink.href = 'https://programmernetlink.com/profile/' + storedUsername;
    profileLink.textContent = 'Programmer Netlink Profile';
    userNameElem.insertAdjacentElement('afterend', profileLink);
  } else {
    userNameElem.textContent = 'Unknown';
  }
  
  if (storedTag) {
    tagSelectElem.value = storedTag;
  }
}

const name = document.querySelector('input[name="signup-name"]');
const emailInput = document.querySelector('input[name="signup-email"]');
const passwordInput = document.querySelector('input[name="signup-password"]');
const usernameInput = document.querySelector('input[name="username"]');
const saveButton = document.querySelector('#save');
const tagSelect = document.querySelector('#tag');

saveButton.addEventListener('click', function() {
  localStorage.setItem('signup-name', name.value);
  localStorage.setItem('signup-email', emailInput.value);
  localStorage.setItem('signup-password', passwordInput.value);
  localStorage.setItem('username', usernameInput.value);
  localStorage.setItem('tag', tagSelect.value);
});

const storedName = localStorage.getItem('signup-name');
const storedEmail = localStorage.getItem('signup-email');
const storedPassword = localStorage.getItem('signup-password');
const storedUsername = localStorage.getItem('username');
const storedTag = localStorage.getItem('tag');

const userNameElem = document.querySelector('#user-name');
const tagSelectElem = document.querySelector('#tag');

if (storedName) {
  userNameElem.textContent = storedName + "@" + storedTag + ".netlink";
  const profileLink = document.createElement('a');
  profileLink.href = 'https://programmernetlink.com/profile/' + storedUsername;
  profileLink.textContent = 'Programmer Netlink Profile';
  userNameElem.insertAdjacentElement('afterend', profileLink);
} else {
  userNameElem.textContent = 'Unknown';
}

if (storedTag) {
  tagSelectElem.value = storedTag;
}
