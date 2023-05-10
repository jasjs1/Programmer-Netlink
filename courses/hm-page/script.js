const form = document.querySelector('form');
const postsContainer = document.getElementById('posts');

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
      <h2><span id="author">${author}</span></h2>
      <h2>${course.title}</h2>
      <p>${course.description}</p>
      <h4>${course.type}</h4>
      <video src="${course.link}" controls></video> <!-- Display the video using the 'src' attribute -->
      <div class="interact">
        <button id="bookmark-button" class="bookmark-button" type="button">Bookmark</button>
      </div>
    `;
    postsContainer.appendChild(courseElement);
  }
}

// Add event listener to the form submit button
form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get the input values
  const title = document.getElementById('course-title').value.trim();
  const description = document.getElementById('course-description').value.trim();
  const link = document.getElementById('course-link').files[0]; // Get the uploaded file
  const type = document.getElementById('course-type').value;
  const skillLevel = document.getElementById('course-skill-level').value.trim();

  // Create a new course object with title, description, link, and type properties
  const course = {
    title,
    description,
    link: URL.createObjectURL(link), // Generate a URL for the uploaded file
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
