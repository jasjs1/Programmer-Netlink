const savedName = localStorage.getItem('signup-name');
const form = document.querySelector('form');
const articlesContainer = document.getElementById('articles');


// Update the page title to include the user's name
// document.title = `${name}'s Article Creator`;

// Load existing articles from local storage
const savedArticles = JSON.parse(localStorage.getItem('articles')) || [];

// Render existing articles
if (savedArticles.length) {
  const articlesHTML = savedArticles.map(article => `<div class="article"><h3>${article.name}</h3><h2>${article.title}</h2><p>${article.body}</p></div>`).join('');
  articlesContainer.innerHTML = articlesHTML;
}

// Add new article and save to local storage
form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get the input values
  const title = document.getElementById('article-title').value.trim();
  const body = document.getElementById('article-body').value.trim();

  // Create a new article object
  const article = {
    title,
    body,
  };

  // Save the new article to local storage
  savedArticles.push(article);
  localStorage.setItem('articles', JSON.stringify(savedArticles));

  // Add the new article to the list
  const articleElement = document.createElement('div');
  articleElement.classList.add('article');
  articleElement.innerHTML = `<h2>${title}</h2><p>${body}</p>`;
  articlesContainer.appendChild(articleElement);

  // Reset the form
  form.reset();
});

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


// Check if articles data exists in local storage
if (localStorage.getItem('articles')) {
  // Render the articles data
  const articles = JSON.parse(localStorage.getItem('articles'));
  // Code to display the articles on the page
} else {
  // No articles data found, display a friendly message to the user
  const message = document.createElement('p');
  message.textContent = savedName + ' has not created any articles, yet.';
  document.body.appendChild(message);
}
