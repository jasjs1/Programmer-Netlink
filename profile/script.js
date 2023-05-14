const showContainerButton = document.getElementById('show-container');
const containerDiv = document.querySelector('.container');

function toggleContainer(action) {
  if (action === 'show') {
    containerDiv.style.display = 'block';aconst showContainerButton = document.getElementById('show-container');
const containerDiv = document.querySelector('.container');

function toggleContainer(action) {
  if (action === 'show') {
    containerDiv.style.display = 'block';
    showContainerButton.textContent = 'CLOSE';
    hash();
  } else if (action === 'hide') {
    containerDiv.style.display = 'none';
    showContainerButton.textContent = 'CREATE PODCAST';
  } else if (action === 'toggle') {
    if (containerDiv.style.display === 'none') {
      containerDiv.style.display = 'block';
      showContainerButton.textContent = 'CLOSE';
      hash();
    } else {
      containerDiv.style.display = 'none';
      showContainerButton.textContent = 'CREATE PODCAST';
    }
  }
}

showContainerButton.addEventListener('click', () => {
  toggleContainer('toggle');
});


const linksButton = document.getElementById('add-link');
linksButton.addEventListener('click', () => {
  const linkForm = document.getElementById('link-form');
  if (linkForm.style.display === 'none') {
    linkForm.style.display = 'block';
  } else {
    linkForm.style.display = 'none';
  }
});

const createLinkButton = document.getElementById('create-link');
createLinkButton.addEventListener('click', () => {
  createLink();
});

const clearStorageButton = document.getElementById('clear-storage');
clearStorageButton.addEventListener('click', () => {
  localStorage.clear();
  displayPodcasts();
});


function createLink() {
  let link;
  do {
    link = prompt("Enter the URL for the link (format: https://example.com/):", "https://example.com/");
    if (link != null) {
      if (link.startsWith("https://") && link.endsWith("/")) {
        const body = document.getElementById("ep-link-text");
        const newLink = `<a href="${link}" target="_blank">${link}</a>`;
        body.insertAdjacentHTML('beforeend', newLink);

        const links = body.getElementsByTagName("a");
        const newLinkElement = links[links.length - 1]; // fixed line here
        const linksButton = document.getElementById('add-link');
        linksButton.addEventListener('click', () => {
          const linkForm = document.getElementById('link-form');
          if (linkForm.style.display === 'none') {
            linkForm.style.display = 'block';
          } else {
            linkForm.style.display = 'none';
          }
        });

        const createLinkButton = document.getElementById('create-link');
        createLinkButton.addEventListener('click', () => {
          createLink();
        });

        const clearStorageButton = document.getElementById('clear-storage');
        clearStorageButton.addEventListener('click', () => {
          localStorage.clear();
          displayPodcasts();
        });
      }
    }
  } while (link != null && (!link.startsWith("https://") || !link.endsWith("/")));
}

// Link JavaScript styling (basicly)

const link = document.querySelector('a[href="${link}"]');
link.setAttribute('target', '_blank');

function redirectPodcastProfile() {
  window.location.href = "http://127.0.0.1:5500/podcasts/podcast-profile/podcast-profile.html";
}


function reloadCurrentPage() {
  location.reload();
}

function toggleSkillMaker() {
  
}


function submitPastJob() {
  // Get the input values
  const companyName = document.getElementById('company-name').value.trim();
  const employmentType = document.getElementById('employment-type').value.trim();
  const role = document.getElementById('role').value.trim();
  const startDate = formatDate(document.getElementById('start-date').value);
  const endDate = formatDate(document.getElementById('end-date').value);
  const location = document.getElementById('location').value;
  const moreInfo = document.getElementById('more-info').value;

  // Create a new job object with the input values
  const jobData = {
    companyName,
    employmentType,
    role,
    startDate,
    endDate,
    location,
    moreInfo,
  };

  let existingData = JSON.parse(localStorage.getItem('yourJobs')) || [];

  existingData.unshift(jobData);

  localStorage.setItem('yourJobs', JSON.stringify(existingData));

  // Clear the form inputs
  document.getElementById('company-name').value = '';
  document.getElementById('employment-type').value = '';
  document.getElementById('role').value = '';
  document.getElementById('start-date').value = '';
  document.getElementById('end-date').value = '';
  document.getElementById('location').value = '';
  document.getElementById('more-info').value = '';
}

function formatDate(dateString) {
  const date = new Date(dateString);
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const year = date.getFullYear();

  return `${month}/${day}/${year}`;
}

    showContainerButton.textContent = 'CLOSE';
    hash();
  } else if (action === 'hide') {
    containerDiv.style.display = 'none';
    showContainerButton.textContent = 'CREATE PODCAST';
  } else if (action === 'toggle') {
    if (containerDiv.style.display === 'none') {
      containerDiv.style.display = 'block';
      showContainerButton.textContent = 'CLOSE';
      hash();
    } else {
      containerDiv.style.display = 'none';
      showContainerButton.textContent = 'CREATE PODCAST';
    }
  }
}

showContainerButton.addEventListener('click', () => {
  toggleContainer('toggle');
});


const linksButton = document.getElementById('add-link');
linksButton.addEventListener('click', () => {
  const linkForm = document.getElementById('link-form');
  if (linkForm.style.display === 'none') {
    linkForm.style.display = 'block';
  } else {
    linkForm.style.display = 'none';
  }
});

const createLinkButton = document.getElementById('create-link');
createLinkButton.addEventListener('click', () => {
  createLink();
});

const clearStorageButton = document.getElementById('clear-storage');
clearStorageButton.addEventListener('click', () => {
  localStorage.clear();
  displayPodcasts();
});


function createLink() {
  let link;
  do {
    link = prompt("Enter the URL for the link (format: https://example.com/):", "https://example.com/");
    if (link != null) {
      if (link.startsWith("https://") && link.endsWith("/")) {
        const body = document.getElementById("ep-link-text");
        const newLink = `<a href="${link}" target="_blank">${link}</a>`;
        body.insertAdjacentHTML('beforeend', newLink);

        const links = body.getElementsByTagName("a");
        const newLinkElement = links[links.length - 1]; // fixed line here
        const linksButton = document.getElementById('add-link');
        linksButton.addEventListener('click', () => {
          const linkForm = document.getElementById('link-form');
          if (linkForm.style.display === 'none') {
            linkForm.style.display = 'block';
          } else {
            linkForm.style.display = 'none';
          }
        });

        const createLinkButton = document.getElementById('create-link');
        createLinkButton.addEventListener('click', () => {
          createLink();
        });

        const clearStorageButton = document.getElementById('clear-storage');
        clearStorageButton.addEventListener('click', () => {
          localStorage.clear();
          displayPodcasts();
        });
      }
    }
  } while (link != null && (!link.startsWith("https://") || !link.endsWith("/")));
}

// Link JavaScript styling (basicly)

const link = document.querySelector('a[href="${link}"]');
link.setAttribute('target', '_blank');

function redirectPodcastProfile() {
  window.location.href = "http://127.0.0.1:5500/podcasts/podcast-profile/podcast-profile.html";
}


function reloadCurrentPage() {
  location.reload();
}

function toggleSkillMaker() {
  
}

function submitPastJob() {
  // Get the input values
  const companyName = document.getElementById('company-name').value.trim();
  const employmentType = document.getElementById('employment-type').value.trim();
  const role = document.getElementById('role').value.trim();
  const startDate = document.getElementById('start-date').value;
  const endDate = document.getElementById('end-date').value;
  const location = document.getElementById('location').value;
  const moreInfo = document.getElementById('more-info').value;
  
  // Create a new job object with the input values
  const jobData = {
    companyName,
    employmentType,
    role,
    startDate,
    endDate,
    location,
    moreInfo,
  };

  
  let existingData = JSON.parse(localStorage.getItem('past-jobs')) || [];


  existingData.unshift(jobData);

  localStorage.setItem('past-jobs', JSON.stringify(existingData));

  form.reset();
}
