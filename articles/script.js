const form = document.querySelector('form');
const articlesContainer = document.getElementById('articles');

// Get saved articles from localStorage
const savedArticles = JSON.parse(localStorage.getItem('articles')) || [];

// Render saved articles on page load
if (savedArticles.length) {
  renderArticles(savedArticles);
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const title = document.getElementById('article-title').value.trim();
  const body = document.getElementById('article-body').value.trim();
  const credits = document.getElementById('credits').value.trim() || " ";

  const tags = document.getElementById('tags').value;
  const article = {
    title,
    body,
    credits,
    tags,
    date: Date.now()
  };

  savedArticles.unshift(article);
  localStorage.setItem('articles', JSON.stringify(savedArticles));
  renderArticles(savedArticles);

  form.reset();
});


function renderArticles(articles) {
  const articlesHTML = articles
    .map(
      (article) =>
        `<div class="article">
          <h3>${article.title}</h3>
          <p>${article.body}</p>
          ${article.credits ? `<p>Credits: ${article.credits}</p>` : ''}
          <p>${article.tags}</p>
          <p><img src="/articles/img/date+time.png" alt="Image Description" width="15" height="15" /> ${new Date(article.date).toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: '2-digit' }).replace(',', '').replace(/\//g, '.')}&nbsp;${new Date(article.date).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }).replace(/^(\d{1,2}):(\d{2})\s*([ap]m)$/i, (match, hour, minute, period) => `${hour}:${minute}${period.toLowerCase().charAt(0)}`)}</p>



        </div>`
    )
    .join('');
  articlesContainer.innerHTML = articlesHTML;
}



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


function hash() {
  console.log('hash function called');
  articlesContainer.style.display = 'block';
  window.location.hash = 'create';
  
}


showContainerButton.addEventListener('click', function() {
  toggleContainer('toggle');
});


const savedName = localStorage.getItem('signup-name');

if (localStorage.getItem('articles')) {
  const articles = JSON.parse(localStorage.getItem('articles'));
} else {
  const message = document.createElement('p');
  message.textContent = savedName + ' has not created any articles, yet.';
  document.body.appendChild(message);
}
function loadVideo() {
  const youtubeUrl = prompt('Enter a YouTube video URL:');
  if (youtubeUrl) {
    const videoId = getVideoIdFromLink(youtubeUrl);
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;

    // Create span element for video link
    const videoLinkSpan = document.createElement('span');
    videoLinkSpan.innerHTML = `<a href="${youtubeUrl}" target="_blank">${youtubeUrl}</a>`;

    // Append span to page
    const videoLinksContainer = document.getElementById('video-links');
    videoLinksContainer.appendChild(videoLinkSpan);

    // Create iframe element for embedded video
    const videoIframe = document.createElement('iframe');
    videoIframe.src = embedUrl;
    videoIframe.width = '560';
    videoIframe.height = '315';
    videoIframe.frameBorder = '0';
    videoIframe.allowFullscreen = true;

    // Append iframe to page
    const videoContainer = document.getElementById('video-container');
    videoContainer.appendChild(videoIframe);

    // Save video URL to localStorage
    const articleId = document.getElementById('article-id').value;
    const articles = JSON.parse(localStorage.getItem('articles'));
    const articleIndex = articles.findIndex(article => article.id === articleId);
    if (articleIndex !== -1) {
      articles[articleIndex].videoUrl = youtubeUrl;
      localStorage.setItem('articles', JSON.stringify(articles));
    }
  }
}


    // Get the title and body information from the URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const title = urlParams.get('title');
    const body = urlParams.get('body');

    // Set the title and body content
    document.querySelector('#article-title').textContent = title;
    document.querySelector('#article-body').textContent = body;


    function showCredits() {
      const quoteImage = document.querySelector('.quote-image');
      const creditsDiv = document.querySelector('.credits');
    
      // Hide the credits div by default
      creditsDiv.style.display = 'none';
    
      quoteImage.addEventListener('click', () => {
        quoteImage.replaceWith(creditsDiv);
        creditsDiv.style.display = 'block'; // Show the credits div when the quote image is clicked
      });
    }
    
    function showAddTagsDiv() {
      var addTagsDiv = document.querySelector('.assign-tag');
      addTagsDiv.style.display = 'block';
    }
