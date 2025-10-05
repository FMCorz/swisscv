// Mobile Menu Toggle
const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuIcon) {
    mobileMenuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuIcon.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
const navLinkItems = document.querySelectorAll('.nav-links a');
navLinkItems.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuIcon.classList.remove('active');
    });
});

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80; // Height of navbar
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe step cards for animation
const stepCards = document.querySelectorAll('.step-card');
stepCards.forEach(card => {
    observer.observe(card);
});

// Observe expertise items for animation
const expertiseItems = document.querySelectorAll('.expertise-item');
expertiseItems.forEach(item => {
    observer.observe(item);
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        navbar.classList.remove('scroll-up');
        return;
    }

    if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
        // Scrolling down
        navbar.classList.remove('scroll-up');
        navbar.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
        // Scrolling up
        navbar.classList.remove('scroll-down');
        navbar.classList.add('scroll-up');
    }

    lastScroll = currentScroll;
});

// Add scroll-based styling to navbar
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// CTA Button click handler (placeholder for booking integration)
const ctaButtons = document.querySelectorAll('.cta-button');
ctaButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        // If the button doesn't have a proper href, handle it here
        if (button.getAttribute('href') === '#' || button.getAttribute('href') === '') {
            e.preventDefault();
            // Add your booking system integration here
            // For example: window.open('https://calendly.com/your-link', '_blank');
            console.log('Booking button clicked - integrate with your booking system');
            alert('Intégration du système de réservation à venir. Pour l\'instant, veuillez nous contacter par email.');
        }
    });
});

// Add CSS classes for animations
const style = document.createElement('style');
style.textContent = `
  .fade-in {
    animation: fadeInUp 0.6s ease-out forwards;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .navbar.scrolled {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    .nav-links.active {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background-color: white;
      padding: 2rem;
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
      gap: 1rem;
    }

    .mobile-menu-icon.active span:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
    }

    .mobile-menu-icon.active span:nth-child(2) {
      opacity: 0;
    }

    .mobile-menu-icon.active span:nth-child(3) {
      transform: rotate(-45deg) translate(7px, -6px);
    }
  }
`;
document.head.appendChild(style);

// Log page load
console.log('Caractère RH - Landing page loaded successfully');
