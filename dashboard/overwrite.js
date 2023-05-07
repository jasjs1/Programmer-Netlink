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




function savePodcast(event) {
  event.preventDefault();

  const title = document.getElementById('ep-title').value;
  const number = document.getElementById('ep-num').value;
  const description = document.getElementById('ep-description').value;
  const link = document.getElementById('ep-link-text').value;

  const podcastData = {
    title: title,
    episodeNumber: number,
    description: description,
    link: link
  };
  const storedPodcasts = JSON.parse(localStorage.getItem('podcast-uploads')) || [];
  storedPodcasts.push(podcastData);
  localStorage.setItem('podcast-uploads', JSON.stringify(storedPodcasts));
  
  alert('Podcast has been shared with no errors!'); 

  displayPodcasts();
}

const podcastsContainer = document.getElementById('podcasts');

function displayPodcasts() {
  const podcastsData = localStorage.getItem('podcast-uploads');
  if (!podcastsData) {
    podcastsContainer.innerHTML = '<p>No podcasts uploaded yet.</p>';
    return;
  }
  const podcasts = JSON.parse(podcastsData);
  if (podcasts.length === 0) {
    podcastsContainer.innerHTML = '<p>No podcasts uploaded yet.</p>';
    return;
  }
  let podcastsHTML = '';
  for (const podcast of podcasts) {
    const { title, episodeNumber, description, link } = podcast;
    podcastsHTML += `
      <div class="podcast-episode">
      <p>------------------------------------------------</p>
        <h3>${title}</h3>
        <p>Episode ${episodeNumber}</p>
        <p>${description}</p>
        <p><a href="${link}"</a></p>
      </div>
    `;
  }
  podcastsContainer.innerHTML = podcastsHTML;
}

displayPodcasts();

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
