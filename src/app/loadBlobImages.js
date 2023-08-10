document.addEventListener('DOMContentLoaded', () => {
    const savedBlobURL = localStorage.getItem('imageBlobURL');
    if (savedBlobURL) {
      const imageElement = document.createElement('img');
      imageElement.src = savedBlobURL;
      imageElement.style.maxWidth = '100%';
      imageElement.style.maxHeight = '300px';
      
      const textarea = document.getElementById('post-title');
      textarea.value = savedBlobURL; // Add blob URL to the textarea
      textarea.insertAdjacentElement('afterend', imageElement); // Display the image below the textarea
    }
  });
