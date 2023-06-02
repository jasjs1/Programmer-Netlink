const form = document.querySelector('form');
const articlesContainer = document.getElementById('gigs');

// Get saved articles from localStorage
const savedArticles = JSON.parse(localStorage.getItem('gigs')) || [];

// Render the first saved article on page load
if (savedArticles.length) {
  renderArticle(savedArticles[0]);
}

function renderArticle(article) {
  const freelancerName = article.freelancerName;
  const gigTitle = article.gigTitle;

  const articleHTML = `
    <div>
      <h2>Freelancer Email:</h2>
      <button id="contact">${article.contact}</button>
    </div>
  `;

  articlesContainer.innerHTML = articleHTML;
}
