const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const arrowLeft = $('.left')
const arrowRight = $('.right')
const sliderInner = $('.carousel-inner')

let currentSlide = 0;
const slideWidth = 1100;
const totalSlides =Array.from( $$('.item')).length
const prev = () => {
    if (currentSlide > 0) {
        currentSlide--;
        sliderInner.style.transform = `translateX(${-currentSlide * slideWidth}px)`;
        sliderInner.style.transition == 'all 1s';
    }
}

const next = () => {
    if (currentSlide < totalSlides - 1) {
        currentSlide++;
        sliderInner.style.transform = `translateX(${-currentSlide * slideWidth}px)`;
    }
}

arrowLeft.addEventListener('click', prev);
arrowRight.addEventListener('click', next);






