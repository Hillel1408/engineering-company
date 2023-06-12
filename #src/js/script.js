let contactsSpoilers = document.querySelectorAll('.faq-spoiler-flex');
if (contactsSpoilers) {
    for (let spoiler of contactsSpoilers) {
        spoiler.addEventListener('click', function () {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            if (content.style.maxHeight) content.style.maxHeight = null;
            else content.style.maxHeight = content.scrollHeight + 'px';
        });
    }
}

const swiper = new Swiper('.clients-slider', {
    direction: 'horizontal',
    slidesPerView: 1,
    navigation: {
        nextEl: '.clients-slider-button-next',
        prevEl: '.clients-slider-button-prev',
    },
});
