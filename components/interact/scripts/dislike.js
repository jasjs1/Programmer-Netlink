let dislikeButton = document.getElementById('dislikeButton');
let dislikeCountElement = document.getElementById('dislikeCount');
let svgIcon = document.querySelector('.svg-icon');

dislikeButton.addEventListener('click', function() {
  let currentDislikes = localStorage.getItem('dislikes');
  currentDislikes = currentDislikes ? parseInt(currentDislikes) : 0;

  currentDislikes += 1;

  localStorage.setItem('dislikes', currentDislikes);
  dislikeCountElement.textContent = currentDislikes;

  // Toggle the 'clicked' class to change SVG color
  svgIcon.classList.toggle('clicked');
});
