const form = document.querySelector('form');
const articlesContainer = document.getElementById('communities');
const savedName = localStorage.getItem('signup-name');
const communityCreatorName = localStorage.getItem('signup-name');

// Get saved articles from localStorage
const savedArticles = JSON.parse(localStorage.getItem('communities')) || [];

function renderArticles(articles, authorName) {
  const articlesHTML = articles
    .map((community) => {
      return `
        <div class="community-display">
          <h2 class="community-title">${community.title}</h2>
          <h3 class="community-description">${community.description}</h3>
          <p class="community-info">${authorName} · ${community.privacy} · ${community.topic}</p>

          <button id="myButton" onclick="toggleButtonText()">JOIN</button>

        </div>
      `;
    })
    .join('');
  articlesContainer.innerHTML = articlesHTML;
}

// Render saved articles on page load
renderArticles(savedArticles, communityCreatorName);

function toggleButtonText() {
  var button = document.getElementById("myButton");
  button.innerHTML = "OPEN";
  localStorage.setItem("buttonText", "OPEN");
  window.location.href = "http://127.0.0.1:5500/communities/communiy-pg/community-page.html";
}

// Retrieve the saved button text from localStorage (if any) and update the button accordingly on page load
window.onload = function() {
  var savedButtonText = localStorage.getItem("buttonText");
  if (savedButtonText) {
    var button = document.getElementById("myButton");
    button.innerHTML = savedButtonText;
  }
};
