// Smooth Scrolling for Navigation Links
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Scroll Animation for Sections (Optional for Smooth Scrolling)
window.addEventListener('scroll', () => {
    const animatedSections = document.querySelectorAll('.animation');
    animatedSections.forEach(section => {
        const sectionPos = section.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;

        if (sectionPos < viewportHeight - 100) {
            section.classList.add('active');
        }
    });
});

// Contact Form Validation
document.querySelector('#contact-form form').addEventListener('submit', function (e) {
    e.preventDefault(); // Stop form from submitting right away

    const name = document.querySelector('input[placeholder="Full name"]').value;
    const email = document.querySelector('input[placeholder="email"]').value;
    const message = document.querySelector('textarea').value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields before submitting.");
        return;
    }

    // Simple email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return;
    }

    alert("Thank you for your message!");
    // Optionally clear form after submission
    document.querySelector('#contact-form form').reset();
});

// Mobile Menu Toggle (if needed for mobile navigation)
const mobileNavButton = document.querySelector('.mobile-nav-toggle');
const navbar = document.querySelector('.navbar');

if (mobileNavButton) {
    mobileNavButton.addEventListener('click', () => {
        navbar.classList.toggle('navbar-active');
    });
}
