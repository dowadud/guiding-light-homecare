// ===================================
// GUIDING LIGHT HOME CARE - JAVASCRIPT
// ===================================

// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    offset: 100
});

// ===================================
// NAVBAR FUNCTIONALITY
// ===================================

const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ===================================
// SMOOTH SCROLLING
// ===================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// HERO STATS COUNTER ANIMATION
// ===================================

function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };

    updateCounter();
}

// Observe hero section to trigger counter animation
const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counters = document.querySelectorAll('.stat-number');
            counters.forEach(counter => {
                if (counter.textContent === '0') {
                    animateCounter(counter);
                }
            });
            heroObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const heroSection = document.querySelector('.hero');
if (heroSection) {
    heroObserver.observe(heroSection);
}

// ===================================
// PARALLAX EFFECT FOR HERO
// ===================================

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.hero-image');
    if (heroImage && scrolled < window.innerHeight) {
        heroImage.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ===================================
// CONTACT FORM SUBMISSION
// ===================================

const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            service: formData.get('service'),
            message: formData.get('message')
        };
        
        // Log form data (in production, send to server)
        console.log('Form submitted:', data);
        
        // Show success message
        alert('Thank you for contacting us! We will get back to you soon.');
        
        // Reset form
        this.reset();
    });
}

// ===================================
// HOVER EFFECTS FOR SERVICE CARDS
// ===================================

const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ===================================
// HOVER EFFECTS FOR TEAM CARDS
// ===================================

const teamCards = document.querySelectorAll('.team-card');
teamCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px) rotate(1deg)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) rotate(0deg)';
    });
});

// ===================================
// SCROLL PROGRESS INDICATOR
// ===================================

const scrollProgress = document.createElement('div');
scrollProgress.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 4px;
    background: linear-gradient(90deg, #2c5aa0, #f39c12);
    z-index: 10001;
    transition: width 0.1s ease;
`;
document.body.appendChild(scrollProgress);

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.pageYOffset / windowHeight) * 100;
    scrollProgress.style.width = scrolled + '%';
});

// ===================================
// CUSTOM CURSOR (Desktop Only)
// ===================================

if (window.innerWidth > 968) {
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Create cursor dot
    const cursor = document.createElement('div');
    cursor.style.cssText = `
        position: fixed;
        width: 10px;
        height: 10px;
        background: #f39c12;
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        mix-blend-mode: difference;
        transition: transform 0.2s ease;
    `;
    document.body.appendChild(cursor);

    // Create cursor follower
    const cursorFollower = document.createElement('div');
    cursorFollower.style.cssText = `
        position: fixed;
        width: 40px;
        height: 40px;
        border: 2px solid rgba(243, 156, 18, 0.5);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9998;
        transition: all 0.15s ease;
    `;
    document.body.appendChild(cursorFollower);

    function updateCursor() {
        cursorX += (mouseX - cursorX) * 0.3;
        cursorY += (mouseY - cursorY) * 0.3;
        
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
        
        cursorFollower.style.left = (cursorX - 20) + 'px';
        cursorFollower.style.top = (cursorY - 20) + 'px';
        
        requestAnimationFrame(updateCursor);
    }

    updateCursor();

    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, select');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
            cursorFollower.style.transform = 'scale(1.5)';
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursorFollower.style.transform = 'scale(1)';
        });
    });
}

// ===================================
// IMAGE LOADING OPTIMIZATION
// ===================================

const images = document.querySelectorAll('img');
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.style.opacity = '1';
            imageObserver.unobserve(img);
        }
    });
}, { rootMargin: '50px' });

images.forEach(img => {
    img.style.opacity = '1'; // Ensure immediate visibility
    if (img.complete) {
        img.style.opacity = '1';
    }
    imageObserver.observe(img);
});

// ===================================
// PAGE LOAD ANIMATION
// ===================================

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.3s ease';

// ===================================
// AOS REFRESH ON RESIZE
// ===================================

window.addEventListener('resize', () => {
    AOS.refresh();
});

// ===================================
// CONSOLE MESSAGE
// ===================================

console.log('%c✦ Guiding Light Home Care LLC', 'color: #2c5aa0; font-size: 20px; font-weight: bold;');
console.log('%cWebsite loaded successfully!', 'color: #f39c12; font-size: 14px;');
console.log('%cContact: (864) 438-4626 | info@guidinglighthcllc.com', 'color: #27ae60; font-size: 12px;');
