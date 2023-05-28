const showContainerButton = document.getElementById('show-container');
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
  let endDate = formatDate(document.getElementById('end-date').value);
  const location = document.getElementById('location').value;
  const moreInfo = document.getElementById('more-info').value;

  // Check if the "Still working here?" checkbox is selected
  const stillWorkingCheckbox = document.getElementById('currently-working-here');
  if (stillWorkingCheckbox.checked) {
    endDate = 'Currently working at ' + companyName; // Set the end date to "Present" if still working
  } else {
    const startDateParts = startDate.split('/');
    const endDateParts = endDate.split('/');

    const startMonth = parseInt(startDateParts[0]);
    const startDay = parseInt(startDateParts[1]);
    const startYear = parseInt(startDateParts[2]);

    const endMonth = parseInt(endDateParts[0]);
    const endDay = parseInt(endDateParts[1]);
    const endYear = parseInt(endDateParts[2]);

    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();
    const currentYear = currentDate.getFullYear();

    let totalYears = currentYear - startYear;
    let totalMonths = currentMonth - startMonth;
    let totalDays = currentDay - startDay;

    if (totalDays < 0) {
      totalMonths -= 1;
      const daysInPreviousMonth = new Date(startYear, startMonth, 0).getDate();
      totalDays += daysInPreviousMonth;
    }

    if (totalMonths < 0) {
      totalYears -= 1;
      totalMonths += 12;
    }

    const yearsText = totalYears > 0 ? `${totalYears.toLocaleString()} year${totalYears > 1 ? 's' : ''}` : '';
    const monthsText = totalMonths > 0 ? `${totalMonths.toLocaleString()} month${totalMonths > 1 ? 's' : ''}` : '';
    
    const employmentDuration = [yearsText, monthsText].filter(Boolean).join(' ');
    
    endDate = `${endDate} ${employmentDuration}`;
    
  }

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

  form.reset();
  location.reload();
}
