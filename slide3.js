let currentIndex = 0;
const totalSlides = 5;
const visibleSlides = 1;

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





setInterval(nextSlide, 10000); // Меняет слайд каждые 4 секунд





