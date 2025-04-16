document.addEventListener('DOMContentLoaded', function () {
    // Get all navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');

    // Add click event to each link
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Calculate position
                const headerOffset = 80; // Adjust based on your header height
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                // Scroll to target
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll detection to apply fade-slide-up effect
    const fadeElements = document.querySelectorAll('.fade-slide-up');

    // Function to check visibility and add "animate" class
    const checkVisibility = () => {
        fadeElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top <= window.innerHeight * 0.8 && rect.bottom >= 0) { // Nếu phần tử xuất hiện trong màn hình
                el.classList.add('animate');
            }
        });
    };

    // Run visibility check on scroll
    window.addEventListener('scroll', checkVisibility);

    // Run the check on page load
    checkVisibility();
});
