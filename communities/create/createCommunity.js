document.getElementById("create-community-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    var title = document.getElementById("community-title").value;
    var description = document.getElementById("community-description").value;
    var privacy = document.getElementById("community-privacy").value;
    var topic = document.getElementById("community-topic").value;

    // Create community object
    var community = {
        title: title,
        description: description,
        privacy: privacy,
        topic: topic
    };

    // Store community in local storage
    var communities = JSON.parse(localStorage.getItem("communities")) || [];
    communities.push(community);
    localStorage.setItem("communities", JSON.stringify(communities));

    // Clear form fields
    document.getElementById("create-community-form").reset();
});