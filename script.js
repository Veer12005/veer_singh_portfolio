// Dark mode toggle
const toggleBtn = document.getElementById('theme-toggle');
const themeLink = document.getElementById('theme-style');

toggleBtn.addEventListener('click', () => {
    if (themeLink.getAttribute('href') === 'style.css') {
        themeLink.setAttribute('href', 'dark.css');
        toggleBtn.textContent = '☀️';
    } else {
        themeLink.setAttribute('href', 'style.css');
        toggleBtn.textContent = '🌙';
    }
});

// Fade-in animation on scroll
const faders = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
    faders.forEach(fader => {
        const rect = fader.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            fader.classList.add('visible');
        }
    });
});

// Contact form
document.getElementById('contact-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Thanks for contacting me! I'll get back to you soon.");
});
