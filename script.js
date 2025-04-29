document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navWrapper = document.querySelector('.nav-wrapper');

  // Add an event listener to toggle the nav menu visibility
  menuToggle.addEventListener('click', () => {
    navWrapper.classList.toggle('open'); // Add/remove the "open" class
  });
});