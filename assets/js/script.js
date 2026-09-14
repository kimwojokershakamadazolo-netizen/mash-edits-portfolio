/* ========================================
   MASH EDITS - JAVASCRIPT FUNCTIONALITY
   ======================================== */

// Hero Slider Functionality
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.dot');

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    slides[n].classList.add('active');
    dots[n].classList.add('active');
}

function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(currentSlideIndex);
}

function currentSlide(n) {
    currentSlideIndex = n;
    showSlide(currentSlideIndex);
}

// Auto-rotate slides every 5 seconds
setInterval(nextSlide, 5000);

// Portfolio Filter Functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        portfolioItems.forEach(item => {
            item.classList.remove('hidden');
            
            if (filterValue !== 'all' && !item.getAttribute('data-category').includes(filterValue)) {
                item.classList.add('hidden');
                item.style.display = 'none';
            } else {
                item.style.display = 'block';
            }
        });
    });
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Contact Form Submission
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const name = formData.get('name') || contactForm.querySelector('input[type="text"]').value;
        const email = formData.get('email') || contactForm.querySelector('input[type="email"]').value;
        const service = contactForm.querySelector('select').value;
        const message = contactForm.querySelector('textarea').value;

        // Validate form
        if (!name || !email || !service || !message) {
            alert('Please fill in all fields');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }

        // Create mailto link for fallback
        const mailtoLink = `mailto:hello@mashedits.co.ke?subject=Portfolio Inquiry - ${service}&body=Name: ${name}%0AEmail: ${email}%0AService: ${service}%0A%0AMessage:%0A${message}`;
        
        // Try to send via FormSubmit.co (free service)
        // Fallback to mailto if needed
        window.location.href = mailtoLink;
        
        // Reset form
        contactForm.reset();
        alert('Thank you for your inquiry! We will get back to you soon.');
    });
}

// Smooth Scrolling for Navigation Links
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

// Navbar Background on Scroll
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 14, 39, 0.98)';
    } else {
        navbar.style.background = 'rgba(10, 14, 39, 0.95)';
    }
});

// Lazy Loading Images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// Animation on Scroll (fade in elements)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card, .testimonial-card, .portfolio-item').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'all 0.6s ease-out';
    observer.observe(element);
});

// Counter Animation for Stats
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    
    const updateCount = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current) + (isNaN(target) ? '' : '');
            requestAnimationFrame(updateCount);
        } else {
            element.textContent = target;
        }
    };
    
    updateCount();
}

// Trigger counter animation when stats section is in view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const stats = entry.target.querySelectorAll('.stat h3');
            stats.forEach(stat => {
                const text = stat.textContent.trim();
                const number = parseInt(text);
                if (!isNaN(number)) {
                    animateCounter(stat, number);
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const aboutStats = document.querySelector('.about-stats');
if (aboutStats) {
    statsObserver.observe(aboutStats);
}

// Form Input Focus Effects
const formInputs = document.querySelectorAll('.form-group input, .form-group select, .form-group textarea');

formInputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.style.boxShadow = '0 0 20px rgba(212, 175, 55, 0.2)';
    });

    input.addEventListener('blur', function() {
        this.parentElement.style.boxShadow = 'none';
    });
});

// WhatsApp Integration
function openWhatsApp() {
    const phoneNumber = '254712345678';
    const message = encodeURIComponent('Hi Mash Edits! I\'m interested in your services.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
}

// Social Media Links Handler
const socialLinks = {
    instagram: 'https://instagram.com/mashedits',
    facebook: 'https://facebook.com/mashedits',
    tiktok: 'https://tiktok.com/@mashedits',
    youtube: 'https://youtube.com/@mashedits'
};

document.querySelectorAll('.social-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        // Links already have href attributes, so they'll open naturally
    });
});

// Responsive Hero Slider Adjustment
function adjustHeroHeight() {
    const hero = document.querySelector('.hero');
    if (window.innerWidth <= 768) {
        hero.style.minHeight = '50vh';
    } else {
        hero.style.minHeight = '100vh';
    }
}

window.addEventListener('resize', adjustHeroHeight);
adjustHeroHeight();

// Keyboard Navigation for Slider
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        nextSlide();
    } else if (e.key === 'ArrowLeft') {
        currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
        showSlide(currentSlideIndex);
    }
});

// Service Card Click Handler (could navigate to service details)
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', function() {
        const service = this.querySelector('h3').textContent;
        // Smooth scroll to contact form
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        // Set service in form
        const serviceSelect = document.querySelector('select');
        Array.from(serviceSelect.options).forEach(option => {
            if (option.textContent.toLowerCase().includes(service.toLowerCase())) {
                serviceSelect.value = option.value;
            }
        });
    });
});

// Portfolio Item Click Handler
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('click', function() {
        const title = this.querySelector('.portfolio-overlay h3').textContent;
        const details = this.querySelector('.portfolio-overlay p').textContent;
        // Could open a modal or detailed view here
        console.log(`Project: ${title} - ${details}`);
    });
});

// Testimonial Carousel (if needed for mobile)
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial-card');

function showTestimonial(n) {
    if (window.innerWidth <= 768 && testimonials.length > 1) {
        testimonials.forEach(t => t.style.display = 'none');
        testimonials[n % testimonials.length].style.display = 'block';
    }
}

// Initialize
if (testimonials.length > 0) {
    showTestimonial(0);
}

// Add Loading State to Submit Button
const submitBtn = document.querySelector('.submit-btn');
if (submitBtn) {
    submitBtn.addEventListener('click', function() {
        this.textContent = 'Sending...';
        this.disabled = true;
        
        setTimeout(() => {
            this.textContent = 'Send Inquiry';
            this.disabled = false;
        }, 2000);
    });
}

// Performance: Defer non-critical image loading
window.addEventListener('load', () => {
    document.querySelectorAll('img').forEach(img => {
        if (img.complete) {
            img.style.opacity = '1';
        }
    });
});

// Accessibility: Skip to main content
const skipLink = document.createElement('a');
skipLink.href = '#home';
skipLink.className = 'skip-link';
skipLink.textContent = 'Skip to main content';
skipLink.style.cssText = `
    position: absolute;
    top: -40px;
    left: 0;
    background: var(--accent-gold);
    color: var(--dark-bg);
    padding: 8px;
    text-decoration: none;
    z-index: 100;
`;

skipLink.addEventListener('focus', () => {
    skipLink.style.top = '0';
});

skipLink.addEventListener('blur', () => {
    skipLink.style.top = '-40px';
});

document.body.insertBefore(skipLink, document.body.firstChild);

// Log initialization
console.log('Mash Edits Portfolio - Ready for action! 🎬📸');
