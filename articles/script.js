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

  // Create a new article object
  const article = {
    title,
    body,
  };

  // Add the new article to the beginning of savedArticles
  savedArticles.unshift(article);

  // Store savedArticles in localStorage
  localStorage.setItem('articles', JSON.stringify(savedArticles));

  // Render the new articles on the page
  renderArticles(savedArticles);

  form.reset();
});

function renderArticles(articles) {
  const articlesHTML = articles
    .map(
      (article) =>
        `<div class="article"><h3>${article.title}</h3><p>${article.body}</p></div>`
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
  } else if (action === 'hide') {
    containerDiv.style.display = 'none';
    showContainerButton.textContent = '+';
  } else if (action === 'toggle') {
    if (containerDiv.style.display === 'none') {
      containerDiv.style.display = 'block';
      showContainerButton.textContent = '-';
    } else {
      containerDiv.style.display = 'none';
      showContainerButton.textContent = '+';
    }
  }
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
