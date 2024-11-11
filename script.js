const slides = document.querySelectorAll('.slide');

// Function to update the slide
slides.forEach((slide) => {

    slide.addEventListener('click', () => {
        removeCurrentActives()
        slide.classList.add('active');
    })
});


// Function to remove the active class from all slides

function removeCurrentActives() {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
}
