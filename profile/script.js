window.onload = () => {
    const followButton = document.getElementById("follow-button");
    const unfollowButton = document.getElementById("unfollow-button");
    const followerCountElement = document.getElementById("follower-count");

    // Check if there's a stored follower count in local storage
    let followerCount = localStorage.getItem("followerCount");
    if (!followerCount) {
      followerCount = 0;
    }

    // Update the follower count element with the current follower count
    followerCountElement.textContent = followerCount;

    // Update the button text based on whether the user is following or not
    if (followerCount > 0) {
      followButton.style.display = "none";
      unfollowButton.style.display = "inline-block";
    } else {
      followButton.style.display = "inline-block";
      unfollowButton.style.display = "none";
    }

    // Add a click event listener to the follow button
    followButton.addEventListener("click", () => {
      // Add 1 to the follower count
      followerCount++;

      // Save the updated follower count to local storage
      localStorage.setItem("followerCount", followerCount);

      // Update the follower count element and button display based on whether the user is following or not
      followerCountElement.textContent = followerCount;
      followButton.style.display = "none";
      unfollowButton.style.display = "inline-block";
    });

    // Add a click event listener to the unfollow button
    unfollowButton.addEventListener("click", () => {
      // Subtract 1 from the follower count
      followerCount--;

      // Save the updated follower count to local storage
      localStorage.setItem("followerCount", followerCount);

      // Update the follower count element and button display based on whether the user is following or not
      followerCountElement.textContent = followerCount;
      followButton.style.display = "inline-block";
      unfollowButton.style.display = "none";
    });
  };

  function uploadImage() {
    const fileInput = document.getElementById('image-upload');
    fileInput.accept = 'image/jpeg, image/png, image/heic'; // Add allowed file types here
  
    fileInput.addEventListener('change', (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
  
      reader.onload = (e) => {
        const uploadedImage = document.getElementById('uploaded-image');
        uploadedImage.style.backgroundImage = `url(${e.target.result})`; // Set the uploaded image as background
        uploadedImage.style.display = 'block';
  
        // Save image data to localStorage
        localStorage.setItem('profileImage', e.target.result);
      }
  
      reader.readAsDataURL(file);
    });
  
    fileInput.click();
  }
  
  // Check if there is a saved image in localStorage and display it
  window.addEventListener('load', () => {
    const profileImage = localStorage.getItem('profileImage');
    if (profileImage) {
      const uploadedImage = document.getElementById('uploaded-image');
      uploadedImage.style.backgroundImage = `url(${profileImage})`;
      uploadedImage.style.display = 'block';
    }
  });
  
  