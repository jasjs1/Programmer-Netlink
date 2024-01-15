const textarea = document.getElementById('lecture-content'); // Replace example-element with the ID of your HTML textarea element.

textarea.addEventListener('input', function() {
  this.style.height = 'auto';
  this.style.height = this.scrollHeight + 'px';
});