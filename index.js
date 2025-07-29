let releaseThoughtBtn = document.getElementById('releaseThoughtBtn');
let releaseThought = document.getElementById('releaseThought');

// Add an event listener to the button
releaseThoughtBtn.addEventListener('click', function(event) {
    // clear the textarea
    event.preventDefault();
    const textarea = document.querySelector('textarea');
    textarea.value = '';
});
