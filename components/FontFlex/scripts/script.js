function showMarkdownChangesInPreview() {
  const previewMarkdownChanges = document.getElementById('preview');
  const showPreviewButton = document.getElementById('showPreviewButton');

  if (previewMarkdownChanges.style.display === 'none') {
    // Show the preview div
    previewMarkdownChanges.style.display = 'block';
    showPreviewButton.textContent = 'Hide Preview';
  } else {
    // Hide the preview div
    previewMarkdownChanges.style.display = 'none';
    showPreviewButton.textContent = 'Show Preview';
  }
}
