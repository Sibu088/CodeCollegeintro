document.getElementById('addNoteButton').addEventListener('click', function() {
    const noteInput = document.getElementById('noteInput');
    const noteText = noteInput.value.trim();

    if(noteText !== '') {
        addNoteToContainer(noteText);
        noteInput.value = ''; // Clear the textarea after adding the note
    } else {
        alert('Please enter a note.');
    }
});

function addNoteToContainer(noteText) {
    const notesContainer = document.getElementById('notesContainer');

    const noteDiv = document.createElement('div');
    noteDiv.className = 'note';
    noteDiv.innerText = noteText;

    const deleteButton = document.createElement('button');
    deleteButton.className = 'deleteButton';
    deleteButton.innerText = 'Delete';
    deleteButton.onclick = function() {
        notesContainer.removeChild(noteDiv); // Remove note when delete button is clicked
    };

    noteDiv.appendChild(deleteButton);
    notesContainer.appendChild(noteDiv);
}