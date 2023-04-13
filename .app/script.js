const form = document.querySelector('form');
const postsContainer = document.getElementById('posts');

// Check if name exists in local storage
let name = localStorage.getItem('name');
if (!name) {
  // If not, prompt the user for their name and store it in local storage
  name = prompt('Please enter your name:');
  localStorage.setItem('name', name);
}


// Update the page title to include the user's name
// document.title = `${name}'s Social Media App`;

// Load existing posts from local storage
const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];

// Render existing posts
if (savedPosts.length) {
  const postsHTML = savedPosts.map(post => `<div class="post"><h2>${post.title}</h2><p>${post.body}</p></div>`).join('');
  postsContainer.innerHTML = postsHTML;
}


// Add new post and save to local storage
form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get the input values
  const title = document.getElementById('post-title').value.trim();
  const body = document.getElementById('post-body').value.trim();

  // Create a new post object
  const post = {
    title,
    name,
    body,
  };

  // Create a new post element
  const postElement = document.createElement('div');
  postElement.classList.add('post');
  postElement.innerHTML = `<<h2>${title}</h2><p>${body}</p>`;

  // Add the new post to the list
  postsContainer.appendChild(postElement);

  // Save the new post to local storage
  savedPosts.push(post);
  localStorage.setItem('posts', JSON.stringify(savedPosts));

  // Reset the form
  form.reset();
});

const containerDiv = document.querySelector('.container');
const showContainerButton = document.getElementById('show-container');

function checkTitleLength() {
  const titleValue = titleInput.value;
  if (titleValue.length < titleInput.minLength) {
    console.log(`Title must be at least ${titleInput.minLength} characters`);
    toggleContainer('show');
  } else if (titleValue.length > titleInput.maxLength) {
    console.log(`Title must be no more than ${titleInput.maxLength} characters`);
    toggleContainer('show');
  } else {
    console.log(""); // empty console.log statement to clear any previous messages
    toggleContainer('hide');
  }

  // Function to check the length of the body inputs
  const bodyValue = bodyInput.value;
  if (bodyValue.length < bodyInput.minLength) {
    console.log(`Body must be at least ${bodyInput.minLength} characters`);
    toggleContainer('show');
  } else if (bodyValue.length > bodyInput.maxLength) {
    console.log(`Body must be no more than ${bodyInput.maxLength} characters`);
    toggleContainer('show');
  } else {
    console.log(""); // empty console.log statement to clear any previous messages
    toggleContainer('hide');
  }
}

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

const bodyTextarea = document.getElementById('post-body');
const container = document.getElementById('container');

bodyTextarea.addEventListener('keydown', function(event) {
  if (event.code === 'Space') {
    event.stopPropagation();
  }
});

document.body.addEventListener('click', function(event) {
  if (!container.contains(event.target)) {
    container.style.display = 'none';
  }
});



  // Show modal container when user clicks button
  document.getElementById("show-modal").addEventListener("click", function() {
    document.querySelector(".modal-overlay").style.display = "flex";
  });
