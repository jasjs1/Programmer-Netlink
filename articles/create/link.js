function createLink() {
  var link;
  do {
    link = prompt("Enter the URL for the link (format: https://example.com/):", "https://example.com/");
    if (link != null) {
      if (link.startsWith("https://") && link.endsWith("/")) {
        var body = document.getElementById("article-body");
        var newLink = "<a href='" + link + "' target='_blank'>" + link + "</a>";
        body.insertAdjacentHTML('beforeend', newLink);

        // add event listener to newly created link
        var links = body.getElementsByTagName("a");
        var newLinkElement = links[links.length - 1]; // get last link element
        newLinkElement.addEventListener("click", function(event) {
          event.preventDefault(); // prevent default link behavior
          window.open(newLinkElement.href, '_blank'); // open link in new tab
        });
      } else {
        alert("ERR: Invalid URL format. Please enter a URL in the format: https://example.com/");
        console.log('ERR: Invalid URl formatting. User must input a valid url in the format of: https://exampleurl.com/')
      }
    }
  } while (link != null && (!link.startsWith("https://") || !link.endsWith("/")));
}

    
      const toggle = document.querySelector('#toggle');
      const submitBtn = document.querySelector('input[type="submit"]');
    
      toggle.addEventListener('change', () => {
        submitBtn.disabled = !toggle.checked;
      });