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
