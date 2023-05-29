function saveArticleToLocalStorage() {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
      
        const title = document.getElementById('article-title').value.trim();
        const body = document.getElementById('article-body').value.trim();
        const credits = document.getElementById('credits').value.trim() || " ";
      
        const tags = document.getElementById('tags').value;
        const article = {
          title,
          body,
          credits,
          tags,
          date: Date.now()
        };
      
        savedArticles.unshift(article);
        localStorage.setItem('articles', JSON.stringify(savedArticles));
        renderArticles(savedArticles);
      
        form.reset();
      });
      
}