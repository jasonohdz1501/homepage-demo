
function openMenu() {
  const mobile = document.querySelector('.mobile-menu');
  const barActive = document.querySelectorAll('.bar');
  mobile.classList.toggle('show-menu-mobile');
  barActive.forEach(n => n.classList.toggle('active'));
}