const form = document.querySelector('form');
const postsContainer = document.getElementById('posts');
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
      <h3><span id="author">Instructor: ${author}</span></h3>
      <h4>${course.type}</h4>
      <div class="interact">
        <button class="bookmark-button" type="button">Bookmark</button>

      </div>
    `;
    const bookmarkButton = courseElement.querySelector('.bookmark-button');
    bookmarkButton.addEventListener('click', () => {
      saveBookmark(course);
    });
    postsContainer.appendChild(courseElement);
  }
}

// Function to save a course bookmark
function saveBookmark(course) {
  const savedBookmarks = JSON.parse(localStorage.getItem('courses-bookmarks')) || [];
  savedBookmarks.push(course);
  localStorage.setItem('courses-bookmarks', JSON.stringify(savedBookmarks));
  // You can perform any additional actions or UI updates here
}

// Add event listener to the form submit button
form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get the input values
  const title = document.getElementById('course-title').value.trim();
  const description = document.getElementById('course-description').value.trim();
  const link = document.getElementById('course-link').value.trim();
  const type = document.getElementById('course-type').value;
  const skillLevel = document.getElementById('course-skill-level').value.trim();
  
  // Create a new course object with title, description, link, and type properties
  const course = {
    title,
    description,
    link,
    skillLevel,
    type,
  };

  // Load existing courses from local storage
  const savedCourses = JSON.parse(localStorage.getItem('courses')) || [];

  // Add the new course to the beginning of the savedCourses array
  savedCourses.unshift(course);

  // Save the updated savedCourses array to local storage
  localStorage.setItem('courses', JSON.stringify(savedCourses));

  // Reset the form
  form.reset();
  // Reload the courses
  loadCourses();
});

// Load courses when the page is first loaded
loadCourses();

// Add event listener to the course type select element
courseTypeSelect.addEventListener('change', () => {
  const selectedValue = courseTypeSelect.value;

  // Show/hide the paid div based on the selected value
  if (selectedValue === 'Paid') {
    paidDiv.style.display = 'block';
  } else {
    paidDiv.style.display = 'none';
  }
});

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

// Inside the loadCourses function, update the bookmark button state for each course
const bookmarkButton = courseElement.querySelector('.bookmark-button');
if (isCourseBookmarked(course)) {
  bookmarkButton.textContent = 'Bookmarked';
  bookmarkButton.classList.add('bookmarked');
} else {
  bookmarkButton.textContent = 'Bookmark';
  bookmarkButton.classList.remove('bookmarked');
}

// Inside the bookmarkButton event listener, toggle the bookmark and update the button state
bookmarkButton.addEventListener('click', () => {
  toggleBookmark(course);
  if (isCourseBookmarked(course)) {
    bookmarkButton.textContent = 'Bookmarked';
    bookmarkButton.classList.add('bookmarked');
  } else {
    bookmarkButton.textContent = 'Bookmark';
    bookmarkButton.classList.remove('bookmarked');
  }
});

