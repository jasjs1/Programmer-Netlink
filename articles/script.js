const savedName = localStorage.getItem('signup-name');
const form = document.querySelector('form');
const articlesContainer = document.getElementById('articles');

const savedArticles = JSON.parse(localStorage.getItem('articles')) || [];


if (savedArticles.length) {
  const articlesHTML = savedArticles.map(article => `<div class="article"><h3>${article.name}</h3><h2>${article.title}</h2><p>${article.body}</p></div>`).join('');
  articlesContainer.innerHTML = articlesHTML;
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


  savedArticles.push(article);
  localStorage.setItem('articles', JSON.stringify(savedArticles));


  const articleElement = document.createElement('div');
  articleElement.classList.add('article');
  articleElement.innerHTML = `<h2>${title}</h2><p>${body}</p>`;
  articlesContainer.appendChild(articleElement);


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


if (localStorage.getItem('articles')) {
  const articles = JSON.parse(localStorage.getItem('articles'));
} else {
  const message = document.createElement('p');
  message.textContent = savedName + ' has not created any articles, yet.';
  document.body.appendChild(message);
}
