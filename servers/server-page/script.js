function activeInServer() {
  setTimeout(function() {
    console.log('user online on server');
  }, 2000); // 2000 milliseconds = 2 seconds
  console.log('user offline on server');
}
activeInServer();

function displayServerInfo() {
  const serverData = localStorage.getItem('server');
  if (serverData) {
    const server = JSON.parse(serverData);
    
    const serverInfoDiv = document.getElementById('server-info');

    const nameElement = document.createElement('h1');
    nameElement.textContent = server.name;
    serverInfoDiv.appendChild(nameElement);

    const descElement = document.createElement('h3');
    descElement.textContent = server.description;
    serverInfoDiv.appendChild(descElement);

    const langElement = document.createElement('h4');
    langElement.textContent = server.programmingLanguage;
    serverInfoDiv.appendChild(langElement);
  }
}

// Call displayServerInfo when the page loads
window.addEventListener('load', displayServerInfo);

document.getElementById('upload-sub-snippet').addEventListener('click', function() {
  var inputText = document.getElementById('create-sub-snippet').value;

  // Retrieve existing snippets from localStorage
  var existingSnippets = localStorage.getItem('subSnippets');

  // If there are existing snippets, parse them from JSON
  var snippets = existingSnippets ? JSON.parse(existingSnippets) : [];

  // Add the new snippet to the array
  snippets.push({
    content: inputText
  });

  // Save the updated snippets array as JSON in localStorage
  localStorage.setItem('subSnippets', JSON.stringify(snippets));

  // Optionally, you can display a confirmation message to the user
  console.log('SubSnippet was saved, inputted SubSnippet: ' + inputText);
});

// Get the sub-snippets container
const subSnippetsContainer = document.getElementById('sub-snippets');

// Retrieve sub-snippets data from localStorage
const subSnippetsData = JSON.parse(localStorage.getItem('subSnippets')) || [];

// Generate sub-snippets
function generateSubSnippets() {
  subSnippetsContainer.innerHTML = ''; // Clear existing sub-snippets

  subSnippetsData.forEach(subSnippet => {
    // Create a sub-snippet element
    const subSnippetElement = document.createElement('div');
    subSnippetElement.classList.add('sub-snippet');

    // Create sub-snippet title
    const titleElement = document.createElement('h3');
    titleElement.textContent = subSnippet.title;
    subSnippetElement.appendChild(titleElement);

    // Create sub-snippet content
    const contentElement = document.createElement('p');
    contentElement.textContent = subSnippet.content;
    subSnippetElement.appendChild(contentElement);

    // Append sub-snippet to the container
    subSnippetsContainer.appendChild(subSnippetElement);
  });
}

// Call generateSubSnippets to display the initial sub-snippets
generateSubSnippets();

const authorsName = localStorage.getItem('signup-name');

// Save the author's name to localStorage
localStorage.setItem('authorName', authorsName);

// Retrieve the subSnippets data from localStorage
let subSnippetsDataLocalStorage = localStorage.getItem('subSnippets');

if (subSnippetsDataLocalStorage !== null) {
  // Parse the JSON data into an array of objects (if valid)
  let subSnippets = [];
  try {
    subSnippets = JSON.parse(subSnippetsDataLocalStorage);
  } catch (error) {
    console.error('Error parsing subSnippets data:', error);
  }

  // Add the author's name to each subSnippet object
  subSnippets.forEach((subSnippet) => {
    subSnippet.author = authorsName;
  });

  // Save the modified subSnippets array back to localStorage

  localStorage.setItem('subSnippets', JSON.stringify(subSnippets));
} else {
console.error('subSnippetsData is not set in localStorage');
}

// Call generateSubSnippets to display the modified sub-snippets
generateSubSnippets();

function alertUserToJoinServer() {
  setTimeout(function() {
    var userResponse = confirm('Hey, you look interested in this server. Would you like to join the server?');
    if (userResponse) {
      // User clicked "OK" or "Yes"
      // Save the user's response in a cookie
      document.cookie = 'joinServer=true; expires=Fri, 31 Dec 9999 23:59:59 GMT';
    } else {
      // User clicked "Cancel" or "No"
      // Save the user's response in a cookie
      document.cookie = 'joinServer=false; expires=Fri, 31 Dec 9999 23:59:59 GMT';
    }
  }, 3000); // Wait for 3 seconds (3000 milliseconds) before showing the prompt
}
alertUserToJoinServer()