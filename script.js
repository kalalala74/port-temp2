// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Frame counter animation
let frameCount = 1;
const frameCounterElement = document.getElementById('frameCount');

setInterval(() => {
    frameCount++;
    if (frameCount > 99999) frameCount = 1;
    frameCounterElement.textContent = String(frameCount).padStart(5, '0');
}, 100);

// Scroll animations for film frames
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
        }
    });
}, observerOptions);

document.querySelectorAll('[data-film]').forEach(element => {
    observer.observe(element);
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 10, 10, 1)';
        navbar.style.boxShadow = '0 4px 20px rgba(255, 215, 0, 0.4)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        navbar.style.boxShadow = '0 4px 10px rgba(255, 215, 0, 0.2)';
    }
});
