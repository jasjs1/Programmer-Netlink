const markdownTextEditor = document.getElementById("markdown-editor");
const previewMarkdownChanges = document.getElementById("preview"); // May not use

function addH1() {
    const markdownTextEditor = document.getElementById("markdown-editor");

    markdownTextEditor.innerHTML = "# ";
}

function addH2() {
    const markdownTextEditor = document.getElementById("markdown-editor");

    markdownTextEditor.innerHTML = "## ";
}

function addH3() {
    const markdownTextEditor = document.getElementById("markdown-editor");

    markdownTextEditor.innerHTML = "### ";
}

function addBold() {
    const markdownTextEditor = document.getElementById("markdown-editor");

    markdownTextEditor.innerHTML = "#### ";
}