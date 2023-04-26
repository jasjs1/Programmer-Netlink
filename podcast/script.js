const showContainerButton = document.getElementById('show-container');
const containerDiv = document.querySelector('.container');

function toggleContainer(action) {
  if (action === 'show') {
    containerDiv.style.display = 'block';
    showContainerButton.textContent = '-';
    hash(); // add this line to set the hash value
  } else if (action === 'hide') {
    containerDiv.style.display = 'none';
    showContainerButton.textContent = '+';
  } else if (action === 'toggle') {
    if (containerDiv.style.display === 'none') {
      containerDiv.style.display = 'block';
      showContainerButton.textContent = '-';
      hash(); // add this line to set the hash value
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
  event.preventDefault(); // prevent the form from submitting normally

  // extract form data
  const title = document.getElementById('ep-title').value;
  const number = document.getElementById('ep-num').value;
  const description = document.getElementById('ep-description').value;
  const audioFile = document.getElementById('audio-file-input').files[0];

  // create audio element and set its source to the uploaded file
  const audioElement = document.createElement('audio');
  audioElement.controls = true;
  const audioSource = document.createElement('source');
  audioSource.src = URL.createObjectURL(audioFile);
  audioSource.type = 'audio/mpeg';
  audioElement.appendChild(audioSource);

  // save to local storage
  const podcastData = {
    title: title,
    episodeNumber: number,
    description: description,
    audioURL: URL.createObjectURL(audioFile),
    audioElement: audioElement  // store the audio element in the object
  };
  const storedPodcasts = JSON.parse(localStorage.getItem('podcast-uploads')) || [];
  storedPodcasts.push(podcastData);
  localStorage.setItem('podcast-uploads', JSON.stringify(storedPodcasts));

  // update the podcasts list on the page
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
    const { title, episodeNumber, description, audioElement } = podcast;
    podcastsHTML += `
      <div class="podcast-episode">
        <h3>${title}</h3>
        <p>Episode ${episodeNumber}</p>
        <p>${description}</p>
        ${audioElement.outerHTML}  // add the audio element to the HTML
      </div>
    `;
  }
  podcastsContainer.innerHTML = podcastsHTML;
}

displayPodcasts();
