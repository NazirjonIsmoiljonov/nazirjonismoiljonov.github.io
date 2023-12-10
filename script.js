// Select DOM items
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

// Toggle the 'show' class on the nav menu when the hamburger is clicked
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});
