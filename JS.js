const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children); 

const slideWidth = slides[0].getBoundingClientRect().width;

slides.forEach((slide, index) => {
    slide.style.left = slideWidth * + 'px';
})
const moveToSlide = (track, currentSlide, targetSlide) =>{
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}

prevButton.addEventListener('click', e=> {
    const currentSlide = track.document.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;

    moveToSlide(track, currentSlide, previousSlide);

});

 nextButton.addEventListener('click', e=> {
    const currentSlide = track.document.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;

    moveToSlide(track, currentSlide, nextSlide);
 });

 dotsNav.addEventListener('click', e=>{
     const targetDot = e.target.closest('button');
     if (!targetDot) return;

     const currentSlide = track.querySelector('.current-slide');
     const currntDot = dots.querySelector('.current-slide');
     const targetIndex = dots.findIndex(dot => dot === targetDot);
     const targetSlide = slides[targetIndex];

     moveToSlide(track, currentSlide, targetSlide);
     updateDots(currntDot, targetDot);
 })



