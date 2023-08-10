// Get references to the textarea and preview elements
var textarea = document.getElementById("markdown-editor");
var preview = document.getElementById("preview");

// Update the preview when the textarea content changes
textarea.addEventListener("input", function () {
  var markdownText = textarea.value;
  var htmlText = convertMarkdownToHTML(markdownText);
  preview.innerHTML = htmlText;
});

// Function to convert Markdown to HTML
function convertMarkdownToHTML(markdownText) {
  var htmlText = "";

  // Handle headers (h1, h2, h3, etc.)
  markdownText = markdownText.replace(
    /^(#{1,6})\s*(.*?)\s*$/gm,
    function (match, p1, p2) {
      var level = p1.length;
      return "<h" + level + ">" + p2 + "</h" + level + ">";
    }
  );

  // Handle code blocks
  markdownText = markdownText.replace(
    /```([\s\S]*?)```/g,
    function (match, p1) {
      var codeContent = p1.trim();
      return "<pre><code>" + escapeHtml(codeContent) + "</code></pre>";
    }
  );

  // Handle paragraphs
  var paragraphs = markdownText.split("\n\n");
  paragraphs.forEach(function (paragraph) {
    // Check if the paragraph is a link to avoid a bug where the link ends with a </p>
    if (
      paragraph.match(/^\[.*?\]\(.*?\)$/) ||
      paragraph.match(/^(https?|ftp):\/\/|www\.\S+(?:\/|\b)$/)
    ) {
      htmlText += paragraph;
    } else {
      var formattedParagraph = paragraph.replace(/\n/g, "<br>");
      htmlText += "<p>" + formattedParagraph + "</p>";
    }
  });

  // Handle links
  htmlText = htmlText.replace(
    /(\[(.*?)\]\((.*?)\))|(?:(?:(?:https?|ftp):\/\/|www\.)\S+(?:\/|\b))/g,
    function (match, p1, p2, p3) {
      if (p1) {
        // Markdown link syntax
        return '<a href="' + p3 + '">' + p2 + "</a>";
      } else if (
        match.match(/^(https?|ftp):\/\//) ||
        match.startsWith("www.")
      ) {
        // Direct link
        var url = match;
        if (!url.match(/^(?:https?|ftp):\/\//)) {
          url = "http://" + url; // Set protocol to http:// if no protocol is provided
        }
        return '<a href="' + url + '">' + url.replace(/&/g, "&amp;") + "</a>";
      }
    }
  );

  // Handle emphasis (bold and italic)
  htmlText = htmlText.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  htmlText = htmlText.replace(/\*(.*?)\*/g, "<em>$1</em>");

  return htmlText;
}

// Helper function to escape HTML entities
function escapeHtml(text) {
  var element = document.createElement("div");
  element.innerText = text;
  return element.innerHTML;
}
