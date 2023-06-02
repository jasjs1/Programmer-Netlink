const form = document.querySelector('form');
const articlesContainer = document.getElementById('gigs');

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
            <h3 id="info">${freelancerName} · 1 rating</h3>
          </div>
          <h2 id="gig-title">${gigTitle}</h2>
          <h3 id="gig-description">${gig.description}</h3>
          <h3 id="price">$${gig.rate}/hr</h3>
          <button class="contact-freelancer" id="enroll-to-course"><a href="http://127.0.0.1:5500/courses/create/create-course.html" target="_blank">ENROLL TO COURSE</a></button>
          
        </div>
      `;
    })
    .join('');
  
  articlesContainer.innerHTML = articlesHTML;
}
