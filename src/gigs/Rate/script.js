const signupName = localStorage.getItem('signup-name');
const selectElement = document.getElementById('name-select');
const option = document.createElement('option');
const freelancerName = localStorage.getItem('signup-name');

option.text = signupName;
selectElement.add(option);

const displayTheFreelancerNameWithInnerHTML = `How did ${freelancerName} do with the gig? Write your thoughs below:`;
document.getElementById("overallRating").textContent = displayTheFreelancerNameWithInnerHTML;
