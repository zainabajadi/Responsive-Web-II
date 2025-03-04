document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links a');

    // Toggle the hamburger menu
    menuIcon.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Close menu when a link is clicked & show the correct section
    links.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active'); // Close menu after clicking a link
        });
    });
});

// Function to show specific page
function showPage(pageId) {
    let pages = document.querySelectorAll('.page');
    pages.forEach(page => page.style.display = 'none'); // Hide all pages
    document.getElementById(pageId).style.display = 'block'; // Show selected page

    // Close the hamburger menu after clicking a link
    document.querySelector('.nav-links').classList.remove('active');
}