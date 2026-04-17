const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');   // Show/hide menu
  menuToggle.classList.toggle('menu-open'); 
  
// Accessibility: set aria-expanded
menuToggle.setAttribute('aria-expanded', isOpen);    // Switch icon
});