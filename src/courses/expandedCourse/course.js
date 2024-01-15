const coursesData = localStorage.getItem('courses');

// Check if 'courses' item exists in localStorage and is not null
if (coursesData !== null) {
    try {
        // Parse JSON data
        const coursesObject = JSON.parse(coursesData);

        // Access the 'title' property
        const titleValue = coursesObject.data.subStorage.title;

        // Set the document title
        document.title = titleValue + ' · Programmer Netlink';
    } catch (error) {
        console.error("Error parsing JSON data:", error);
    }
} else {
    console.error("'courses' item not found in localStorage");
}
