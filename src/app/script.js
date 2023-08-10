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
const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];

// Render existing posts
if (savedPosts.length) {
  savedPosts.reverse(); // Reverse the order of savedPosts to display the latest posts first
  for (let i = 0; i < savedPosts.length; i++) {
    const post = savedPosts[i];

    // Create a new post element
    const postElement = document.createElement('div');
    postElement.classList.add('post');
    
    const author = localStorage.getItem('signup-name');
    
    postElement.innerHTML = `
    <h2 class="post-author" style="color: #6466E9;" onclick="window.location.href='http://127.0.0.1:5500/profile/profile.html'">
    ${author} · ${post.date}
  </h2>  
      </h2>
      <h3 style="font-size: 1.2rem; margin-bottom: 5px;">${post.title}</h3>

      
      <div id="interact" style="display: flex; gap: 1%">
      <img src="/assets/svg/interact/like.svg" width="20px" height="20px" id="likeButton">
      <p id="likeCount" style="display: flex" ></p>
      <img src="/assets/svg/interact/dislike.svg" width="20px" height="20px" id="dislikeButton" class="dislike-clicked">
      <p id="dislikeCount" style="display: flex"></p>
      <img src="/assets/svg/interact/comment.svg" width="20px" height="20px">
    </div>
    
    

      </div>
    `;

    // Add the new post to the top of the list
    postsContainer.appendChild(postElement);

    const bookmarkButton = postElement.querySelector('.bookmark-button');
    bookmarkButton.addEventListener('click', function() {
      // Retrieve existing bookmarks from localStorage or initialize an empty array
      const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];

      // Check if the post is already bookmarked
      const bookmarkIndex = bookmarks.findIndex(bookmark => bookmark.title === post.title);
      if (bookmarkIndex !== -1) {
        // Post is already bookmarked, so remove it
        bookmarks.splice(bookmarkIndex, 1);
        console.log('Removed ' + post.title + ' from post bookmarks.');
      } else {
        // Post is not bookmarked, so add it
        bookmarks.push(post);
        console.log('Added ' + post.title + ' to post bookmarks.');
      }

      // Save the updated bookmarks array to localStorage
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    });
  }
}

function formatDate(dateString) {
  const options = {
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  };

  const formattedDate = new Date(dateString).toLocaleString('en-US', options);
  const [date, time] = formattedDate.split(', ');

  return `${date.split('/').join('.')} ${time}`;
}

/// ... (Your existing code)

// Add new post and save to local storage
form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get the input values
  const title = document.getElementById('post-title').value.trim();
  const body = document.getElementById('post-body').value.trim();

  // Check for banned words in the post body
  const bannedWords = ['banned1', 'banned2', 'banned3']; // Add your list of banned words here
  for (const word of bannedWords) {
    if (body.includes(word)) {
      alert('Your post contains banned words. Please remove them before submitting.');
      return; // Prevent form submission
    }
  }

  // Create a new post object
  const post = {
    title,
    body,
    date: new Date().toISOString()
  };

  // Add the new post to the savedPosts array
  savedPosts.unshift(post);

  // Save the updated savedPosts array to local storage
  localStorage.setItem('posts', JSON.stringify(savedPosts));

  // Reset the form values
  form.reset();

  // Refresh the page to display the new post
  location.reload();
});

// ... (Your existing code)




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
        var postTitleInput = document.getElementById("post-title");
        var existingValue = postTitleInput.value;
        var newLink = "<a href='" + link + "' target='_blank'>" + link + "</a>";
        postTitleInput.value = existingValue + newLink;

        // add event listener to newly created link
        var links = postTitleInput.getElementsByTagName("a");
        var newLinkElement = links[links.length - 1]; // get last link element
        newLinkElement.addEventListener("click", function(event) {
          event.preventDefault(); // prevent default link behavior
          window.open(newLinkElement.href, '_blank'); // open link in new tab
        });
      } else {
        alert("ERR: Invalid URL format. Please enter a URL with the correct formatting: https://example.com/");
        console.error('ERR: invalid URL format. The user must enter a new URL in the format of: https://example.com/');
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

// redirect to other pags when user clicks on a image

function redirectToAppDrawer() {
  window.location.href = 'http://www.google.com'; 
}

function redirectToProfilePage() {
  window.location.href = 'http://127.0.0.1:5500/profile/profile.html'; 
}

function logout() {
  window.location.href = 'http://127.0.0.1:5500/hook-page/hook.html#login';
}

function redirectToSettings() {
  window.location.href = 'http://127.0.0.1:5500/profile/dashboard/dashboard.html#/bookmarks';
}

function displayProfileRelatedLinks() {
  var divElement = document.getElementById('profileLinks');

  // Set the display property of the div element to "block"
  divElement.style.display = 'block';
}

const showSub = document.getElementById('profile-image-container');
const subContainer = document.querySelector('.profile-image-sub-container'); // Added '.' before the class name

function toggleContainer(action) {
  if (action === 'show') {
    subContainer.style.display = 'block'; // Changed containerDiv to subContainer
    showSub.textContent = '-'; // Changed showContainerButton to showSub
    hash(); // add this line to set the hash value
  } else if (action === 'hide') {
    subContainer.style.display = 'none'; // Changed containerDiv to subContainer
    showSub.textContent = '+'; // Changed showContainerButton to showSub
  } else if (action === 'toggle') {
    if (subContainer.style.display === 'none') { // Changed containerDiv to subContainer
      subContainer.style.display = 'block'; // Changed containerDiv to subContainer
      showSub.textContent = '-'; // Changed showContainerButton to showSub
      hash(); // add this line to set the hash value
    } else {
      subContainer.style.display = 'none'; // Changed containerDiv to subContainer
      showSub.textContent = '+'; // Changed showContainerButton to showSub
    }
  }
}

// The HTML div you provided
const profileLinksDiv = document.getElementById('profileLinks');

// Adding event listener to the showSub button
showSub.addEventListener('click', function() {
  toggleContainer('toggle');
});

// Initially hiding the profileLinksDiv
subContainer.style.display = 'none'; // Changed containerDiv to subContainer


const button = document.getElementById('bookmark-button');

button.addEventListener('click', function() {
  button.style.backgroundColor = 'orange';
});



const urlRegex = /https?:\/\/[^\s/$.?#]+\.[^\s]*/gi;
postElement.innerHTML = postElement.innerHTML.replace(urlRegex, function(url) {
  return `<a href="${url}" target="_blank">${url}</a>`;
});


