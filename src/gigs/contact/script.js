const form = document.querySelector('form');
const articlesContainer = document.getElementById('gigs');
const freelancerName = localStorage.getItem('signup-name');

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


window.onload = function() {
    var link = document.getElementById("rateFreelancer");
    const freelancerName = localStorage.getItem('signup-name');
link.innerHTML = `Rate this: ${freelancerName} freelancer`;

  };
