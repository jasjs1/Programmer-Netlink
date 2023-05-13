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
