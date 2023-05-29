const form = document.querySelector('form');
const postsContainer = document.getElementById('courses');
const courseTypeSelect = document.getElementById('course-type');
const paidDiv = document.getElementById('paid-div');
const bookmarksContainer = document.getElementById('courses-bookmarks');

// Function to load courses from local storage and display them
function loadCourses() {
  // Load existing courses from local storage
  const savedCourses = JSON.parse(localStorage.getItem('courses')) || [];

  // Clear the posts container
  postsContainer.innerHTML = '';

  // Loop through the saved courses and create course elements
  for (const course of savedCourses) {
    const courseElement = document.createElement('div');
    courseElement.classList.add('post');
    const author = localStorage.getItem('signup-name');
    courseElement.innerHTML = `
      <h2>${course.title}</h2>
      <p>${course.description}</p>
      <h5><span id="author">Instructed by: ${author}</span></h5>
      <h4>${course.type}</h4>
      <div class="interact">
        <button class="bookmark-button" type="button">Bookmark</button>
      </div>
    `;
    const bookmarkButton = courseElement.querySelector('.bookmark-button');
    bookmarkButton.addEventListener('click', () => {
      saveBookmark(course);
      updateBookmarkButtonState(courseElement, course);
    });
    postsContainer.appendChild(courseElement);
    
    // Update the bookmark button state
    updateBookmarkButtonState(courseElement, course);
  }
}

// Rest of the code...

// Function to save or remove a course bookmark
function toggleBookmark(course) {
  const savedBookmarks = JSON.parse(localStorage.getItem('courses-bookmarks')) || [];
  const index = savedBookmarks.findIndex((bookmark) => bookmark.title === course.title);
  if (index > -1) {
    savedBookmarks.splice(index, 1);
  } else {
    savedBookmarks.push(course);
  }
  localStorage.setItem('courses-bookmarks', JSON.stringify(savedBookmarks));
  // You can perform any additional actions or UI updates here
}

// Function to check if a course is bookmarked
function isCourseBookmarked(course) {
  const savedBookmarks = JSON.parse(localStorage.getItem('courses-bookmarks')) || [];
  return savedBookmarks.some((bookmark) => bookmark.title === course.title);
}

// Function to update the bookmark button state
function updateBookmarkButtonState(courseElement, course) {
  const bookmarkButton = courseElement.querySelector('.bookmark-button');
  if (isCourseBookmarked(course)) {
    bookmarkButton.textContent = 'Bookmarked';
    bookmarkButton.classList.add('bookmarked');
  } else {
    bookmarkButton.textContent = 'Bookmark';
    bookmarkButton.classList.remove('bookmarked');
  }
}

// Rest of the code...

// Load courses when the page is first loaded
loadCourses();

// Rest of the code...
