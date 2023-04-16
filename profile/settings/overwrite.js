const emailInput = document.querySelector('input[name="signup-email"]');
const passwordInput = document.querySelector('input[name="signup-password"]');
const nameInput = document.querySelector('input[name="name"]');
const saveButton = document.querySelector('#save');
const selectTag = document.getElementById('tag');

saveButton.addEventListener('click', function() {
  localStorage.setItem('signup-email', emailInput.value);
  localStorage.setItem('signup-password', passwordInput.value);
  localStorage.setItem('user-name', nameInput.value);
  
  const selectedTag = selectTag.value;
  localStorage.setItem('tag', selectedTag);
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

if (typeof(Storage) !== "undefined") {
  const tagValue = localStorage.getItem('tag');
  if (tagValue) {
    selectTag.value = tagValue;
  }
} else {
  console.log('Sorry! No Web Storage support..');
}


const jobStatusSelect = document.getElementById('job-status');
const saveBtn = document.getElementById('save');

// Load job status from localStorage if available
const savedJobStatus = localStorage.getItem('jobStatus');
if (savedJobStatus) {
  jobStatusSelect.value = savedJobStatus;
}

// Save job status to localStorage when save button is clicked
saveBtn.addEventListener('click', function(event) {
  event.preventDefault();
  const jobStatus = jobStatusSelect.value;
  localStorage.setItem('jobStatus', jobStatus);
  window.location.href = 'http://127.0.0.1:5500/profile/settings/profile-settings.html';
});
