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
    ${author} · ${post.tags}
  </h2>  
      </h2>
      <h3 style="font-size: 1.2rem; margin-bottom: 5px;">${post.title}</h3>
      <div class="interact">
      <button type="button" class="bookmark-button">
      <svg fill="currentColor" viewBox="0 0 16 16" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 relative top-[-1px] fill-gray-500 hover:fill-indigo-500 cursor-pointer">
        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" fill="#4D5562" id="bookmark-btn"></path>
      </svg>
    </button>
    

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

// Add new post and save to local storage
form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get the input values
  const title = document.getElementById('post-title').value.trim();
  const body = document.getElementById('post-body').value.trim();
  const tags = document.getElementById('tags').value.trim();

  // Create a new post object
  const post = {
    title,
    body,
    tags,
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

