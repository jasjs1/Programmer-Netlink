const form = document.querySelector('form');
const articlesContainer = document.getElementById('gigs');
const freelancer = localStorage.getItem('signup-name');

// Get saved articles from localStorage
const savedArticles = JSON.parse(localStorage.getItem('gigs')) || [];

// Render saved articles on page load
if (savedArticles.length) {
  renderArticles(savedArticles);
}

function renderArticles(articles) {
  const articlesHTML = articles
    .map((gig) => {
      const freelancerName = gig.freelancerName;
      const gigTitle = gig.gigTitle;

      return `
        <div id="gig-layout">
          <div id="gig-freelancer-information">
            <h3 id="info">${freelancer}</h3>
          </div>
          <h2 id="gig-title">${gigTitle}</h2>
          <h3 id="gig-description">${gig.description}</h3>
          <h3 id="price">$${gig.rate}/hr</h3>
          <button class="contact-freelancer" id="enroll-to-course"><a href="http://127.0.0.1:5500/gigs/contact/contact-freelancer.html" target="_blank">CONTACT FREELANCER</a></button>
          
        </div>
      `;
    })
    .join('');
  
  articlesContainer.innerHTML = articlesHTML;
}
