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
    courseElement.classList.add('post');
    const author = localStorage.getItem('signup-name');
    courseElement.innerHTML = `
      <div id="details">
      <h3 id="details-1"><a href="http://127.0.0.1:5500/profile/profile.html">${author} · ${course.type} · ${course.skillLevel}</a></h3>

      </div>
      <h2 id="course-title">${course.title}</h2>
      <p>${course.description}</p>
      <p><a href="${course.overview}" target="_blank">Course Overview</a></p>
      <button id="enroll-to-course"><a href="${course.courseContent}" target="_blank">ENROLL TO COURSE</a></button>

    `;
    postsContainer.appendChild(courseElement);
  }
}

// Rest of the code...

// Load courses when the page is first loaded
loadCourses();
