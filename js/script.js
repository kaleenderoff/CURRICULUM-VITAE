document.querySelectorAll('.floating-nav a').forEach(link => {
    link.addEventListener('click', function () {
        document.body.classList.remove('section-active');

        const sectionId = this.getAttribute('href').substring(1);
        if (sectionId !== 'home') {
            document.body.classList.add('section-active');
        }

        const targetSection = document.getElementById(sectionId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

function toggleMenu() {
    const nav = document.querySelector('.floating-nav');
    nav.classList.toggle('active');
}

