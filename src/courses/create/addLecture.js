function addLecture() {
    const lectureTextarea = document.getElementById("lecture-content");
const insertNewLectureText = 'Lecture #[number] - [lecture title]';
const insertButton = document.getElementById("insert-button");

function insertText() {
    lectureTextarea.value += insertNewLectureText;
}


insertButton.addEventListener("click", insertText);

}