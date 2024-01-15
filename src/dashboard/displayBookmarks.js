// Retrieve bookmarks from localStorage
const bookmarksJSON = localStorage.getItem('bookmarks');

if (bookmarksJSON) {
  // Parse bookmarks JSON into an array
  const bookmarks = JSON.parse(bookmarksJSON);

  // Get the reference to the <div> element
  const bookmarksContainer = document.getElementById('user-saved-bookmarks');

  // Create a string to hold the HTML content
  let bookmarksHTML = '';

  // Iterate over the bookmarks array and append to the HTML string
  bookmarks.forEach((bookmark) => {
    bookmarksHTML += '<p>' + bookmark.title + '</p>';
  });

  // Set the HTML content of the <div> container
  bookmarksContainer.innerHTML = bookmarksHTML;
}