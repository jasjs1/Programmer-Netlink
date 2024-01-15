const form = document.querySelector('form');
const postsContainer = document.getElementById('courses');

// Function to load courses from local storage and display them
function loadCourses() {
  // Load existing courses from local storage
  const savedCourses = JSON.parse(localStorage.getItem('courses')) || [];

  // Clear the posts container
  postsContainer.innerHTML = '';

  // Loop through the saved courses and create course elements
  for (const course of savedCourses) {
    const courseElement = document.createElement('div');
    courseElement.classList.add('course-container', 'post'); // Add 'course-container' and 'post' classes
    const author = localStorage.getItem('signup-name');
    courseElement.innerHTML = `
    <div id="course-container">
    <h2 id="course-title" style="margin-top: 10px">${course.title}</h2>
    <p>${course.description}</p>
    <button id="course-description"><a href="${course.courseContent}">
      <img id="brain-img" src="/assets/svg/brain.svg">
      <span id="enroll" style="text-decoration: none"><a href="http://127.0.0.1:5500/src/courses/expandedCourse/expandedCourse.html">ENROLL</span>
    </a></button>
    </div>
    `;


    postsContainer.appendChild(courseElement);
  }
}

// Rest of the code...

// Load courses when the page is first loaded
loadCourses();
