const burger = document.querySelector('.burger');
const navbar = document.querySelector('nav');

burger.addEventListener('click', mobileMenu);

function mobileMenu (){
  burger.classList.toggle('active');
  navbar.classList.toggle('active');
}

const navItems = document.querySelectorAll('.link-item');

navItems.forEach(n => n.addEventListener('click', closeMenu));

function closeMenu (){
  burger.classList.remove('active');
  navbar.classList.remove('active');
}



