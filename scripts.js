document.addEventListener('DOMContentLoaded', function() {
    // Function to show alert when button is clicked
    document.getElementById('cta-button').addEventListener('click', function() {
        alert('Thank you for clicking the button!');
    });

    // Function to change navbar style on scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});
