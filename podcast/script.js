const showContainerButton = document.getElementById('show-container');
const containerDiv = document.querySelector('.container');

function toggleContainer(action) {
  if (action === 'show') {
    containerDiv.style.display = 'block';
    showContainerButton.textContent = '-';
    hash();
  } else if (action === 'hide') {
    containerDiv.style.display = 'none';
    showContainerButton.textContent = '+';
  } else if (action === 'toggle') {
    if (containerDiv.style.display === 'none') {
      containerDiv.style.display = 'block';
      showContainerButton.textContent = '-';
      hash();
    } else {
      containerDiv.style.display = 'none';
      showContainerButton.textContent = '+';
    }
  }
}

showContainerButton.addEventListener('click', () => {
  toggleContainer('toggle');
});

function hash() {
  console.log('hash function called');
  containerDiv.style.display = 'block';
  window.location.hash = 'create-podcast';
}

const shareButton = document.querySelector('button[type="submit"]');
shareButton.addEventListener('click', savePodcast);

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
