const toggleMenu = document.querySelector('.toggler');
const mainNav = document.querySelector('.mobile-nav');
const navClose = document.querySelector('.menu-close');

const openMenu = () => {
  mainNav.style.display = 'block';
  toggleMenu.classList.add('visually-hidden');
};

const closeMenu = () => {
  mainNav.style.display = 'none';
  toggleMenu.classList.remove('visually-hidden');
};

toggleMenu.addEventListener('click', openMenu);
navClose.addEventListener('click', closeMenu);
