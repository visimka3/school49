let currentIndex = 0;
const totalSlides = 7;
const visibleSlides = 3;

function showSlides(index) {
    const slides = document.querySelector('.slides');
    const slideWidth = 100 / visibleSlides;
    const offset = -index * slideWidth;
    slides.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    if (currentIndex < totalSlides - visibleSlides) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    showSlides(currentIndex);
}

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalSlides - visibleSlides;
    }
    showSlides(currentIndex);
}





setInterval(nextSlide, 10000); 








