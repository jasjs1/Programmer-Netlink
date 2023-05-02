function modifyTitlWeb() {
  const companyName = localStorage.getItem("comp-name");
  document.title = companyName + " Company Profile - Programmer Netlink";
}

window.onload = modifyTitlWeb;

const imageData = localStorage.getItem("comp-logo");
if (imageData) {
  const dataUri = "data:image/png;base64," + imageData;
  const imgElement = document.createElement("img");
  imgElement.src = dataUri;
  document.querySelector('#logo').appendChild(imgElement);
}

const companyNameLS = localStorage.getItem('comp-name') || '';
const companyUsernameLS = localStorage.getItem('comp-username') || '';
const companyEmailLS = localStorage.getItem('comp-email') || '';
const companyLinkedlnLS = localStorage.getItem('comp-linkdln-url') || '';

// Update the user name and tag elements with the saved values
const nameElement = document.getElementById('comp-name');
nameElement.textContent = companyNameLS;

const userNameElement = document.getElementById('comp-username');
userNameElement.textContent = `@${companyUsernameLS}.company.pr`;

const tagElement = document.getElementById('comp-email');
tagElement.textContent = `${companyEmailLS}`

const linkdlnURL = document.getElementById('comp-linkdln-url');
linkdlnURL.textContent = `${companyLinkedlnLS}`;


const storedUsername = localStorage.getItem('username') || '';
const usernameElem = document.getElementById('username');

if (storedUsername) {
  usernameElem.textContent = `@${storedUsername} `;
} else {
  usernameElem.textContent = '@unknown ';
}

function toggleSettingsContainer() {
  var container = document.getElementById("settings-container");
  if (container.style.display === "none") {
    container.style.display = "block";
  } else {
    container.style.display = "none";
  }
}

// Define a function to create a job listing element
function createJobListingElement(title, location, description, fullPosting, applyHere) {
  var jobListingElement = document.createElement('div');
  jobListingElement.classList.add('job-listing');

  var titleElement = document.createElement('h2');
  titleElement.classList.add('job-title');
  titleElement.textContent = title;

  var locationElement = document.createElement('p');
  locationElement.classList.add('job-location');
  locationElement.textContent = location;

  var descriptionElement = document.createElement('p');
  descriptionElement.classList.add('job-description');
  descriptionElement.textContent = description;

  var fullPostingElement = document.createElement('a');
  fullPostingElement.classList.add('job-full-posting');
  fullPostingElement.textContent = 'View full posting';
  fullPostingElement.href = fullPosting;

  var applyHereElement = document.createElement('a');
  applyHereElement.classList.add('job-apply-here');
  applyHereElement.textContent = ' Apply here';
  applyHereElement.href = applyHere;

  jobListingElement.appendChild(titleElement);
  jobListingElement.appendChild(locationElement);
  jobListingElement.appendChild(descriptionElement);
  jobListingElement.appendChild(fullPostingElement);
  jobListingElement.appendChild(applyHereElement);

  return jobListingElement;
}

// Define a function to create a job listing element
function createJobListingElement(title, location, description, fullPosting, applyHere) {
  var jobListingElement = document.createElement('div');
  jobListingElement.classList.add('job-listing');

  var titleElement = document.createElement('h2');
  titleElement.classList.add('job-title');
  titleElement.textContent = title;

  var locationElement = document.createElement('p');
  locationElement.classList.add('job-location');
  locationElement.textContent = location;

  var descriptionElement = document.createElement('p');
  descriptionElement.classList.add('job-description');
  descriptionElement.textContent = description;

  var fullPostingElement = document.createElement('a');
  fullPostingElement.classList.add('job-full-posting');
  fullPostingElement.textContent = 'View full posting';
  fullPostingElement.href = fullPosting;

  var applyHereElement = document.createElement('a');
  applyHereElement.classList.add('job-apply-here');
  applyHereElement.textContent = ' Apply here';
  applyHereElement.href = applyHere;

  jobListingElement.appendChild(titleElement);
  jobListingElement.appendChild(locationElement);
  jobListingElement.appendChild(descriptionElement);
  jobListingElement.appendChild(fullPostingElement);
  jobListingElement.appendChild(applyHereElement);

  return jobListingElement;
}

// Define a function to create a job listing element
function createJobListingElement(title, location, description, fullPosting, applyHere) {
  var jobListingElement = document.createElement('div');
  jobListingElement.classList.add('job-listing');

  var titleElement = document.createElement('h2');
  titleElement.classList.add('job-title');
  titleElement.textContent = title;

  var locationElement = document.createElement('p');
  locationElement.classList.add('job-location');
  locationElement.textContent = location;

  var descriptionElement = document.createElement('p');
  descriptionElement.classList.add('job-description');
  descriptionElement.textContent = description;

  var fullPostingElement = document.createElement('a');
  fullPostingElement.classList.add('job-full-posting');
  fullPostingElement.textContent = 'View full posting';
  fullPostingElement.href = fullPosting;

  var applyHereElement = document.createElement('a');
  applyHereElement.classList.add('job-apply-here');
  applyHereElement.textContent = ' Apply here';
  applyHereElement.href = applyHere;

  jobListingElement.appendChild(titleElement);
  jobListingElement.appendChild(locationElement);
  jobListingElement.appendChild(descriptionElement);
  jobListingElement.appendChild(fullPostingElement);
  jobListingElement.appendChild(applyHereElement);

  return jobListingElement;
}

// Get the div element to append job listings to
var jobsHome = document.getElementById('jobs-home');

// Get job listing data from localStorage
var jobListings = JSON.parse(localStorage.getItem('jobListings'));

// Loop through each job listing and create a job listing element for it
for (var i = 0; i < jobListings.length; i++) {
  var jobListing = jobListings[i];
  var jobListingElement = createJobListingElement(jobListing.title, jobListing.location, jobListing.description, jobListing.fullPosting, jobListing.applyHere);
  jobsHome.appendChild(jobListingElement);
}

// Define a function to create a job listing element
function createJobListingElement(title, location, description, fullPosting, applyHere) {
  var jobListingElement = document.createElement('div');
  jobListingElement.classList.add('job-listing');

  var titleElement = document.createElement('h2');
  titleElement.classList.add('job-title');
  titleElement.textContent = title;

  var locationElement = document.createElement('p');
  locationElement.classList.add('job-location');
  locationElement.textContent = location;

  var descriptionElement = document.createElement('p');
  descriptionElement.classList.add('job-description');
  descriptionElement.textContent = description;

  var fullPostingElement = document.createElement('a');
  fullPostingElement.classList.add('job-full-posting');
  fullPostingElement.textContent = 'View full posting';
  fullPostingElement.href = fullPosting;

  var applyHereElement = document.createElement('a');
  applyHereElement.classList.add('job-apply-here');
  applyHereElement.textContent = ' Apply here';
  applyHereElement.href = applyHere;

  jobListingElement.appendChild(titleElement);
  jobListingElement.appendChild(locationElement);
  jobListingElement.appendChild(descriptionElement);
  jobListingElement.appendChild(fullPostingElement);
  jobListingElement.appendChild(applyHereElement);

  return jobListingElement;
}

function isHiring() {
  const hiringLS = localStorage.getItem('jobListings');

  if (hiringLS !== null) {
    localStorage.setItem('isHiring', true);
  } else {
    localStorage.setItem('isHiring', false);
  }

  const isHiring = localStorage.getItem('isHiring') === 'true';

  if (isHiring) {
    console.log('Company is hiring = TRUE');
  } else {
    console.log('Company is hiring = FALSE');
  }
}

setInterval(isHiring, 15000); // Call isHiring() every second


function isHiring() {
  const hiringLS = localStorage.getItem('jobListings');

  if (hiringLS !== null) {
    localStorage.setItem('isHiring', true);
  } else {
    localStorage.setItem('isHiring', false);
  }

  const isHiring = localStorage.getItem('isHiring');

  if (isHiring) {
    document.getElementById('is-hiring-value').innerHTML = 'Company is hiring.';
  } else {
    document.getElementById('is-hiring-value').innerHTML = 'Company is not hiring.';
  }
}

setInterval(isHiring, 01);

const form = document.querySelector('form');
const postsContainer = document.getElementById('posts');

// Load existing posts from local storage
const savedPosts = JSON.parse(localStorage.getItem('comp-posts')) || [];

// Render existing posts
if (savedPosts.length) {
  for (let i = savedPosts.length - 1; i >= 0; i--) {
    const post = savedPosts[i];

    // Create a new post element
    const postElement = document.createElement('div');
    postElement.classList.add('post');
    postElement.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.body}</p>
      <p>${post.tags}</p>
    `;

    // Add the new post to the top of the list
    posts.appendChild(postElement);
  }
}

// Add new post and save to local storage
form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get the input values
  const title = document.getElementById('post-title').value.trim();
  const body = document.getElementById('post-body').value.trim();
  const tags = document.getElementById('tags').value.trim();

  // Create a new post object with title, body, tags, and a date property
  const post = {
    title,
    body,
    tags,
    date: Date.now()
  };

  // Create a new post element
  const postElement = document.createElement('div');
  postElement.classList.add('post');
  postElement.innerHTML = `
    <h2>${title}</h2>
    <p>${body}</p>
    <p>${tags}</p>
  `;

  if (tags !== '') {
    postElement.innerHTML += `<p>${tags}</p>`;
  }

  // Add the new post to the top of the list
  posts.appendChild(postElement);

  // Add the new post to the beginning of the savedPosts array
  savedPosts.unshift(post);

  // Save the updated savedPosts array to local storage
  localStorage.setItem('comp-posts', JSON.stringify(savedPosts));

  // Reset the form
  form.reset();
});

