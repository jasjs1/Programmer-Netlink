const textarea = document.getElementById('article-body');

textarea.addEventListener('input', function() {
  this.style.height = 'auto'; // Reset height to auto to calculate the new height
  this.style.height = this.scrollHeight + 'px'; // Set the height to the calculated scroll height
});
