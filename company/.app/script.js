const form = document.querySelector('form');
const postsContainer = document.getElementById('posts');

// Check if name exists in local storage
let name = localStorage.getItem('name');
if (!name) {
  // If not, prompt the user for their name and store it in local storage
  name = prompt('Please enter your name:');
  localStorage.setItem('name', name);
}

// Load existing posts from local storage
const savedPosts = JSON.parse(localStorage.getItem('comp-posts')) || [];

// Render existing posts
if (savedPosts.length) {
  for (let i = savedPosts.length - 1; i >= 0; i--) {
    const post = savedPosts[i];

    // Create a new post element
    const postElement = document.createElement('div');
    postElement.classList.add('post');
    postElement.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.body}</p>
      <p>${post.tags}</p>
    `;

    // Add the new post to the top of the list
    postsContainer.prepend(postElement);
  }
}

function renderArticles(posts) {
  const articlesHTML = posts
    .map(
      (article) =>
        `<div class="posts">
          <h3>${post.title}</h3>
          <p>${post.body}</p>
          <p><img src="/articles/img/date+time.png" alt="Image Description" width="15" height="15" /> ${new Date(article.date).toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: '2-digit' }).replace(',', '').replace(/\//g, '.')}&nbsp;${new Date(article.date).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }).replace(/^(\d{1,2}):(\d{2})\s*([ap]m)$/i, (match, hour, minute, period) => `${hour}:${minute}${period.toLowerCase().charAt(0)}`)}</p>
        </div>`
    )
    .join('');
  articlesContainer.innerHTML = articlesHTML;
}

// Add new post and save to local storage
form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get the input values
  const title = document.getElementById('post-title').value.trim();
  const body = document.getElementById('post-body').value.trim();
  const tags = document.getElementById('tags').value.trim();

  // Create a new post object with title, body, tags, and a date property
  const post = {
    title,
    body,
    tags,
    date: Date.now()
  };

  // Create a new post element
  const postElement = document.createElement('div');
  postElement.classList.add('post');
  postElement.innerHTML = `
    <h2>${title}</h2>
    <p>${body}</p>
  `;

  if (tags !== '') {
    postElement.innerHTML += `<p>${tags}</p>`;
  }


  // Add the new post to the top of the list
  postsContainer.prepend(postElement);

  // Add the new post to the beginning of the savedPosts array
  savedPosts.unshift(post);

  // Save the updated savedPosts array to local storage
  localStorage.setItem('comp-posts', JSON.stringify(savedPosts));

  // Reset the form
  form.reset();

  // Call renderArticles to update the articles list
  renderArticles();
});


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

const bodyTextarea = document.getElementById('post-body');
const container = document.getElementById('container');

bodyTextarea.addEventListener('keydown', function(event) {
  if (event.code === 'Space') {
    event.stopPropagation();
  }
});

var modalOverlay = document.querySelector('.modal-overlay');
var modalContainer = document.querySelector('.modal-container');

window.onclick = function(event) {
  if (event.target == modalOverlay) {
    modalOverlay.style.display = 'none';
  }
}

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    modalOverlay.style.display = 'none';
  }
});


  var modalOverlay = document.querySelector('.modal-overlay');
  var modalContainer = document.querySelector('.modal-container');

  window.onclick = function(event) {
    if (event.target == modalOverlay) {
      modalOverlay.style.display = 'none';
    }
  }

  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      modalOverlay.style.display = 'none';
    }
  });

  // Show modal container when user clicks button
  document.getElementById("show-modal").addEventListener("click", function() {
    document.querySelector(".modal-overlay").style.display = "flex";
  });



// Render existing posts
if (savedPosts.length) {
  const postsHTML = savedPosts.map(post => `<div class="post"><h2>${post.title}</h2><p>${post.body}</p><span class="post-date">${new Date(post.date).toLocaleString()}</span></div>`);

  postsContainer.innerHTML = postsHTML;
} else {
  // Display 404 message if no saved posts
  postsContainer.innerHTML = '<div class="post"><h2>404</h2><p>No snipits found.</p></div>';
}


document.addEventListener("DOMContentLoaded", function() {
  var signupLink = document.getElementById("signup-link");
  var loginLink = document.getElementById("login-link");
  var signupDiv = document.getElementById("signup");
  var loginDiv = document.getElementById("login");

  signupLink.addEventListener("click", function() {
    signupDiv.style.display = "block";
    loginDiv.style.display = "none";
  });

  loginLink.addEventListener("click", function() {
    signupDiv.style.display = "none";
    loginDiv.style.display = "block";
  });
});

function createLink() {
  var link;
  do {
    link = prompt("Enter the URL for the link (format: https://example.com/):", "https://example.com/");
    if (link != null) {
      if (link.startsWith("https://") && link.endsWith("/")) {
        var body = document.getElementById("post-body");
        var newLink = "<a href='" + link + "' target='_blank'>" + link + "</a>";
        body.insertAdjacentHTML('beforeend', newLink);

        // add event listener to newly created link
        var links = body.getElementsByTagName("a");
        var newLinkElement = links[links.length - 1]; // get last link element
        newLinkElement.addEventListener("click", function(event) {
          event.preventDefault(); // prevent default link behavior
          window.open(newLinkElement.href, '_blank'); // open link in new tab
        });
      } else {
        alert("ERR: Invalid URL format. Please enter a URL with the correct formatting: https://example.com/");
        console.log('ERR: invalid url format. the user must enter a new URL in the format of: https://example.com/');
      }

      var linkForm = document.getElementById("link-form");
    if (linkForm.style.display === "none") {
        linkForm.style.display = "block";
    } else {
        linkForm.style.display = "none";
    }
    }
  } while (link != null && (!link.startsWith("https://") || !link.endsWith("/")));
}

function showAddTagsDiv() {
  var addTagsDiv = document.querySelector('.add-tags');
  addTagsDiv.style.display = 'block';
}



const checkbox = document.getElementById('toggle-space');

// Check if the cookie exists and set the checkbox state accordingly
if (document.cookie.includes('toggle-space=true')) {
  checkbox.checked = true;
}

// Add an event listener to the checkbox
checkbox.addEventListener('change', function() {
  // Set the cookie when the checkbox is checked
  if (this.checked) {
    document.cookie = 'toggle-space=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/';
  }
  // Remove the cookie when the checkbox is unchecked
  else {
    document.cookie = 'toggle-space=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
  }
});

const postBody = document.querySelector('#post-body');

postBody.addEventListener('input', () => {
  const text = postBody.value;
  if (text.length >= 10 && text.length <= 450) {
    postBody.style.fontWeight = 'bold';
  } else {
    postBody.style.fontWeight = 'normal';
  }
});

if (savedPosts.length) {
  const postsHTML = savedPosts.map(post => `<div class="post"><h2>${post.title}</h2><p>${post.body}</p><span class="post-date">${new Date(post.date).toLocaleString()}</span></div>`).join('');
  postsContainer.innerHTML = postsHTML;
} else {
  // Display 404 message if no saved posts
  postsContainer.innerHTML = '<p>No posts found.</p>';
}

function addTag() {
  // Prompt the user for the text to add
  const inputText = prompt('Enter text to add: ');
  // console.log('prompt showing.')
  
  // Get the post-body element and its current value
  const postBody = document.getElementById('post-body');
  const currentText = postBody.innerHTML;
  
  // Add the input text to the current text
  const newText = currentText + inputText;
  
  // Set the value of the post-body element to the new text
  postBody.innerHTML = '#' + newText;
  console.log('Fetched tag: ' + newText);

  alert('You can not add any more tags during this session.');
  console.log('User can not add any more tags during this session.');
}


// Get the signup name from local storage
const signupName = localStorage.getItem("signup-name");

// Display the signup name if it exists in local storage
if (signupName) {
  document.getElementById("signup-name").textContent = `Welcome, ${signupName}!`;
}


const tagsInput = document.getElementById('tags');

tagsInput.addEventListener('input', (event) => {
  const value = event.target.value;
  const hashtags = value.match(/#\w+/g); // Find all hashtags in the input

  // Wrap each hashtag in a span with the 'hashtag' class
  const taggedValue = value.replace(/#\w+/g, '<span class="hashtag">$&</span>');
  event.target.value = taggedValue;
});



// const tagsInput = document.getElementById('tags');
tagsInput.addEventListener('input', function() {
  const tagsValue = tagsInput.value.trim();
  if (tagsValue === '') {
    tagsInput.classList.add('no-tags');
    localStorage.setItem('noTags', 'true');
  } else {
    tagsInput.classList.remove('no-tags');
    localStorage.setItem('noTags', 'false');
  }
});

// On page load, check if noTags is true and add the class if it is
const noTags = localStorage.getItem('noTags');
if (noTags === 'true') {
  tagsInput.classList.add('no-tags');
}

// Get the company name from localStorage
const companyName = localStorage.getItem('comp-name');

// Set the content of the span element to the company name
const companyNameElem = document.getElementById('comp-name');
companyNameElem.textContent = companyName;
