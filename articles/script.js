const form = document.querySelector('form');
const articlesContainer = document.getElementById('articles');

// Check if name exists in local storage
let name = localStorage.getItem('name');
if (!name) {
  // If not, prompt the user for their name and store it in local storage
  name = prompt('Please enter your name:');
  localStorage.setItem('name', name);
}

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
    name,
    body,
  };

  // Save the new article to local storage
  savedArticles.push(article);
  localStorage.setItem('articles', JSON.stringify(savedArticles));

  // Add the new article to the list
  const articleElement = document.createElement('div');
  articleElement.classList.add('article');
  articleElement.innerHTML = `<h3>${name}</h3><h2>${title}</h2><p>${body}</p>`;
  articlesContainer.appendChild(articleElement);

  // Reset the form
  form.reset();
});
