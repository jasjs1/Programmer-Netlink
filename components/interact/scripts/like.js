let likeButton = document.getElementById('likeButton');
let likeCountElement = document.getElementById('likeCount');


likeButton.addEventListener('click', function() {
  let currentLikes = localStorage.getItem('likes');
  currentLikes = currentLikes ? parseInt(currentLikes) : 0;
  
  currentLikes += 1;
  
  
  localStorage.setItem('likes', currentLikes);
  likeCountElement.textContent = currentLikes;
});

