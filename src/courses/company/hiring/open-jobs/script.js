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

