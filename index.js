document.getElementById('releaseThoughtBtn');

// Add an event listener to the button
releaseThoughtBtn.addEventListener('click', function(event) {
    // clear the textarea
    event.preventDefault();
    const textarea = document.querySelector('textarea');
    textarea.value = '';
    // show a confirmation message
});