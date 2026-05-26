/* ==========================================
   TRC FIX - JAVASCRIPT FUNCTIONALITY
   ========================================== */

// Service menu data
const serviceMenuData = {
    all: [
        { name: 'Logo Design (HD & Modern)', range: 'K20 – K50', category: 'design' },
        { name: 'Poster & Flyer Design', range: 'K15 – K40', category: 'design' },
        { name: 'Social Media Kits', range: 'K30 – K80', category: 'design' },
        { name: 'Animated Logos', range: 'K50 – K120', category: 'design' },
        { name: 'Business Branding Pack', range: 'K80 – K150', category: 'design' },
        { name: 'Basic Website', range: 'K80 – K150', category: 'web' },
        { name: 'Business Website', range: 'K120 – K250', category: 'web' },
        { name: 'Landing Pages (Ads/Sales)', range: 'K70 – K150', category: 'web' },
        { name: 'Portfolio Websites', range: 'K100 – K200', category: 'web' },
        { name: 'Website Fix & Upgrade', range: 'K40 – K100', category: 'web' },
        { name: 'WhatsApp Bot Setup', range: 'FREE – K30', category: 'automation' },
        { name: 'Smart Auto-Reply Bot', range: 'K30 – K80', category: 'automation' },
        { name: 'AI Chat Integration', range: 'K50 – K120', category: 'automation' },
        { name: 'Group Management Bots', range: 'K20 – K60', category: 'automation' },
        { name: 'Custom Bot Features', range: 'K50 – K150', category: 'automation' },
        { name: 'Auto Posting System', range: 'K50 – K120', category: 'marketing' },
        { name: 'Bulk Messaging Tools', range: 'K40 – K100', category: 'marketing' },
        { name: 'Growth Automation Setup', range: 'K50 – K150', category: 'marketing' },
        { name: 'Status Downloader Setup', range: 'K10 – K30', category: 'marketing' },
        { name: 'Engagement Boost Tools', range: 'K40 – K120', category: 'marketing' },
        { name: 'Digital Business Setup', range: 'K80 – K200', category: 'business' },
        { name: 'AI Tools for Business', range: 'K70 – K180', category: 'business' },
        { name: 'Automation Systems', range: 'K80 – K200', category: 'business' },
        { name: 'Online Income Setup', range: 'K100 – K250', category: 'business' },
        { name: 'WhatsApp Protection Setup', range: 'K20 – K60', category: 'business' },
        { name: 'Account Recovery', range: 'K20 – K80', category: 'business' },
        { name: 'Anti-Hack Security Setup', range: 'K40 – K120', category: 'business' },
        { name: 'Privacy Protection Setup', range: 'K30 – K90', category: 'business' },
    ],
    design: [
        { name: 'Logo Design (HD & Modern)', range: 'K20 – K50' },
        { name: 'Poster & Flyer Design', range: 'K15 – K40' },
        { name: 'Social Media Kits', range: 'K30 – K80' },
        { name: 'Animated Logos', range: 'K50 – K120' },
        { name: 'Business Branding Pack', range: 'K80 – K150' },
    ],
    web: [
        { name: 'Basic Website', range: 'K80 – K150' },
        { name: 'Business Website', range: 'K120 – K250' },
        { name: 'Landing Pages (Ads/Sales)', range: 'K70 – K150' },
        { name: 'Portfolio Websites', range: 'K100 – K200' },
        { name: 'Website Fix & Upgrade', range: 'K40 – K100' },
    ],
    automation: [
        { name: 'WhatsApp Bot Setup', range: 'FREE – K30' },
        { name: 'Smart Auto-Reply Bot', range: 'K30 – K80' },
        { name: 'AI Chat Integration', range: 'K50 – K120' },
        { name: 'Group Management Bots', range: 'K20 – K60' },
        { name: 'Custom Bot Features', range: 'K50 – K150' },
    ],
    marketing: [
        { name: 'Auto Posting System', range: 'K50 – K120' },
        { name: 'Bulk Messaging Tools', range: 'K40 – K100' },
        { name: 'Growth Automation Setup', range: 'K50 – K150' },
        { name: 'Status Downloader Setup', range: 'K10 – K30' },
        { name: 'Engagement Boost Tools', range: 'K40 – K120' },
    ],
    business: [
        { name: 'Digital Business Setup', range: 'K80 – K200' },
        { name: 'AI Tools for Business', range: 'K70 – K180' },
        { name: 'Automation Systems', range: 'K80 – K200' },
        { name: 'Online Income Setup', range: 'K100 – K250' },
        { name: 'WhatsApp Protection Setup', range: 'K20 – K60' },
        { name: 'Account Recovery', range: 'K20 – K80' },
        { name: 'Anti-Hack Security Setup', range: 'K40 – K120' },
        { name: 'Privacy Protection Setup', range: 'K30 – K90' },
    ]
};

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', function() {
    initializeMenuItems();
    initializeFAQ();
    initializeHamburger();
    initializeStatistics();
    initializeWhatsAppButtons();
    initializeContactForm();
});

// ==========================================
// SERVICE MENU
// ==========================================
function initializeMenuItems() {
    const menuItemsContainer = document.getElementById('menuItems');
    if (!menuItemsContainer) return;

    const tabButtons = document.querySelectorAll('.menu-tab-btn');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            displayMenuItems(category);
            
            // Update active tab
            tabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Display initial items
    displayMenuItems('all');
}

function displayMenuItems(category) {
    const menuItemsContainer = document.getElementById('menuItems');
    const items = serviceMenuData[category] || serviceMenuData.all;
    
    menuItemsContainer.innerHTML = '';
    
    items.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'menu-item active';
        itemElement.innerHTML = `
            <h4>${item.name}</h4>
            <div class="price-range">${item.range}</div>
            <p>Contact us for detailed information</p>
        `;
        menuItemsContainer.appendChild(itemElement);
    });
}

// ==========================================
// FAQ ACCORDION
// ==========================================
function initializeFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', function() {
                // Close all other items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Toggle current item
                item.classList.toggle('active');
            });
        }
    });
}

// ==========================================
// MOBILE HAMBURGER MENU
// ==========================================
function initializeHamburger() {
    const hamburger = document.getElementById('hamburger');
    const navbarMenu = document.getElementById('navbarMenu');
    
    if (!hamburger) return;
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navbarMenu.classList.toggle('active');
    });
    
    // Close menu when link is clicked
    const navLinks = navbarMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navbarMenu.classList.remove('active');
        });
    });
}

// ==========================================
// STATISTICS COUNTER ANIMATION
// ==========================================
function initializeStatistics() {
    const statNumbers = document.querySelectorAll('.stat-number');
    let animated = false;
    
    const animateStats = () => {
        if (animated) return;
        
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'));
            const duration = 2000; // 2 seconds
            const start = Date.now();
            
            const updateCount = () => {
                const elapsed = Date.now() - start;
                const progress = Math.min(elapsed / duration, 1);
                const current = Math.floor(progress * target);
                
                stat.textContent = current;
                
                if (progress < 1) {
                    requestAnimationFrame(updateCount);
                } else {
                    stat.textContent = target;
                }
            };
            
            updateCount();
        });
        
        animated = true;
    };
    
    // Trigger animation when stats section is visible
    const statsSection = document.querySelector('.statistics');
    if (statsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateStats();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(statsSection);
    }
}

// ==========================================
// WHATSAPP INTEGRATION
// ==========================================
function initializeWhatsAppButtons() {
    const whatsappButtons = document.querySelectorAll('.whatsapp-btn');
    const phoneNumber = '260763926311';
    
    whatsappButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const service = this.getAttribute('data-service') || 'General Inquiry';
            const message = `Hi TRC FIX, I'm interested in: ${service}. Can you provide more details and pricing?`;
            
            // Encode the message
            const encodedMessage = encodeURIComponent(message);
            const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
            
            // Open WhatsApp
            window.open(whatsappURL, '_blank');
        });
    });
}

// ==========================================
// CONTACT FORM
// ==========================================
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const service = document.getElementById('service').value;
        const details = document.getElementById('details').value;
        const message = document.getElementById('message').value;
        
        // Build message
        const fullMessage = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\nProject Details: ${details}\nMessage: ${message}`;
        
        // Send via WhatsApp
        const phoneNumber = '260763926311';
        const encodedMessage = encodeURIComponent(fullMessage);
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        
        // Show success message
        showFormNotification('Message sent! Opening WhatsApp...', 'success');
        
        // Reset form
        setTimeout(() => {
            contactForm.reset();
            window.open(whatsappURL, '_blank');
        }, 1500);
    });
}

function showFormNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4caf50' : '#f44336'};
        color: white;
        padding: 15px 25px;
        border-radius: 5px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.2);
        z-index: 1000;
        animation: slideInRight 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideInRight 0.3s ease reverse';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ==========================================
// SMOOTH SCROLLING
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ==========================================
// NAVIGATION ACTIVE STATE
// ==========================================
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        // Update active state based on page/current section
        navLinks.forEach(link => {
            link.classList.remove('active');
            
            if (link.getAttribute('href') === window.location.pathname) {
                link.classList.add('active');
            }
        });
    });
}

updateActiveNavLink();

// ==========================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ==========================================
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe animation elements
    document.querySelectorAll('.service-card, .feature-card, .testimonial, .step').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });
}

initializeScrollAnimations();

// ==========================================
// FORM VALIDATION
// ==========================================
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
    return re.test(phone);
}

// Add real-time validation to contact form
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');

if (emailInput) {
    emailInput.addEventListener('blur', function() {
        if (this.value && !validateEmail(this.value)) {
            this.style.borderColor = '#f44336';
        } else {
            this.style.borderColor = '#ddd';
        }
    });
}

if (phoneInput) {
    phoneInput.addEventListener('blur', function() {
        if (this.value && !validatePhone(this.value)) {
            this.style.borderColor = '#f44336';
        } else {
            this.style.borderColor = '#ddd';
        }
    });
}

// ==========================================
// LAZY LOADING IMAGES
// ==========================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// ==========================================
// PRINT STYLES
// ==========================================
window.addEventListener('beforeprint', function() {
    document.querySelector('.navbar').style.display = 'none';
    document.querySelector('.footer').style.display = 'none';
});

window.addEventListener('afterprint', function() {
    document.querySelector('.navbar').style.display = 'block';
    document.querySelector('.footer').style.display = 'block';
});

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

// Get URL parameters
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Debounce function for optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for optimization
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ==========================================
// PERFORMANCE OPTIMIZATION
// ==========================================

// Lazy load background images
document.addEventListener('DOMContentLoaded', function() {
    const lazyBgs = document.querySelectorAll('[data-bg]');
    lazyBgs.forEach(el => {
        el.style.backgroundImage = `url('${el.getAttribute('data-bg')}')`;
    });
});

// Cache DOM queries
const cache = {};

function getCachedElement(selector) {
    if (!cache[selector]) {
        cache[selector] = document.querySelector(selector);
    }
    return cache[selector];
}

// ==========================================
// ACCESSIBILITY ENHANCEMENTS
// ==========================================

// Keyboard navigation for dropdowns
document.querySelectorAll('select').forEach(select => {
    select.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            this.form.submit();
        }
    });
});

// Skip to main content link
const skipLink = document.createElement('a');
skipLink.href = '#main-content';
skipLink.textContent = 'Skip to main content';
skipLink.style.cssText = `
    position: absolute;
    top: -40px;
    left: 0;
    background: #000;
    color: white;
    padding: 8px;
    text-decoration: none;
    z-index: 100;
`;
skipLink.addEventListener('focus', function() {
    this.style.top = '0';
});
skipLink.addEventListener('blur', function() {
    this.style.top = '-40px';
});
document.body.prepend(skipLink);

// ==========================================
// CONSOLE BRANDING
// ==========================================
console.log('%cTRC FIX - Professional Technology Solutions', 'color: #0066cc; font-size: 20px; font-weight: bold;');
console.log('%cPowered by MR TRC', 'color: #666; font-size: 12px;');
console.log('%cFor more information, visit: https://github.com/Trcfix/TRC-OFT-WEBSITE-', 'color: #0066cc; font-size: 11px;');
