// Get the form element and submit button
const form = document.querySelector('form');
const submitButton = document.querySelector('#submit');

// Listen for form submission
form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent default form submission

  // Get the form data
  const communityName = form.elements['community-name'].value;
  const communityDescription = form.elements['community-description'].value;
  const programmingTag = form.elements['programming-tag-community'].value;

  // Create a new community object
  const community = {
    name: communityName,
    description: communityDescription,
    programmingTag: programmingTag
  };

  // Get existing communities from local storage
  let communities = JSON.parse(localStorage.getItem('communities')) || [];

  // Add the new community to the list
  communities.push(community);

  // Save the updated list of communities to local storage
  localStorage.setItem('communities', JSON.stringify(communities));

  // Reset the form
  form.reset();

  // Display a success message
  console.log('Community created successfully!');
});


