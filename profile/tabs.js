function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Create the buttons dynamically
var tabButtonsContainer = document.getElementById("tabButtons");

var snippetsButton = document.createElement("button");
snippetsButton.className = "tablinks";
snippetsButton.innerHTML = "Snippets";
snippetsButton.onclick = function(event) {
  openCity(event, "Snippets");
};


tabButtonsContainer.appendChild(snippetsButton);
tabButtonsContainer.appendChild(articlesButton);

// Show the "Experience" tab by default
document.getElementById("experienceOpen").click();
