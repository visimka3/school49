let currentIndex3 = 0;
const slides3 = document.querySelector('.slides3');
const totalSlides3 = document.querySelectorAll('.card-slide').length;

function updateSlider() {
    const offset = -currentIndex3 * 356; 
    slides3.style.transform = `translateX(${offset}px)`;
}

function nextSlide2() {
    if (currentIndex3 < totalSlides3 - 3) {
        currentIndex3++;
    } else {
        currentIndex3 = 0; 
    }
    updateSlider();
}

function prevSlide2() {
    if (currentIndex3 > 0) {
        currentIndex3--;
    } else {
        currentIndex3 = totalSlides3 - 3;
    }
    updateSlider();
}