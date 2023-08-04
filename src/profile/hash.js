const savedName = localStorage.getItem('signup-name');

function snippetsHash() {
    console.log('snippets hash function called');
    articlesContainer.style.display = 'block';
    window.location.hash = savedName + '/snippets';
}

function articlesHash() {
    console.log('articles hash function called');
    articlesHashContainer.style.display = 'block';
    window.location.hash = savedName + '/articles';
}

function experienceHash() {
    console.log('experience hash function called');
    articlesHashContainer.style.display = 'block';
    window.location.hash = savedName + '/experience';
}