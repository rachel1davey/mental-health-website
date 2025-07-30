let releaseThoughtBtn = document.getElementById('releaseThoughtBtn');
let releaseThought = document.getElementById('releaseThought');

// Add an event listener to the button
releaseThoughtBtn.addEventListener('click', function(event) {
    // clear the textarea
    event.preventDefault();
    const textarea = document.querySelector('textarea');
    textarea.value = '';
});


    document
        .querySelectorAll(".navbar-collapse .nav-link")
        .forEach((link) => {
            link.addEventListener("click", function (e) {
                let section = document.querySelector(e.target.getAttribute("href"));
                if (section) {
                    e.preventDefault(); // Prevent default anchor click behavior
                    let navbarHeight = document.querySelector(".navbar").offsetHeight;
                    window.scroll({
                        top: section.offsetTop - navbarHeight, // Adjust for navbar height
                        behavior: "smooth",
                    });
                    document
                        .querySelector(".navbar-collapse")
                        .classList.remove("show"); // Collapse navbar
                }
            });
        });
