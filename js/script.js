const contactsSpoilers = document.querySelectorAll('.faq-spoiler-flex');
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

const clientsSlider = new Swiper('.clients-slider', {
    direction: 'horizontal',
    slidesPerView: 1,
    navigation: {
        nextEl: '.clients-slider-button-next',
        prevEl: '.clients-slider-button-prev',
    },
});

const evidenceSlider = new Swiper('.evidence-slider', {
    direction: 'horizontal',
    slidesPerView: 'auto',
    spaceBetween: 45,
    navigation: {
        nextEl: '.evidence-slider-button-next',
        prevEl: '.evidence-slider-button-prev',
    },
});

const phoneInput = document.querySelectorAll('.phone-input');

phoneInput.forEach((item) => {
    const phoneMask = new IMask(item, {
        mask: '+{7}(000)000-00-00',
    });
});

const headerBtn = document.querySelector('.header-btn');
const headerNav = document.querySelector('.header__nav');
const headerCloseBtn = document.querySelector('.header-closeBtn');

const func = () => {
    headerNav.classList.toggle('active');
    document.body.classList.toggle('lock');
};

headerBtn.addEventListener('click', () => {
    func();
});

headerCloseBtn.addEventListener('click', () => {
    func();
});
