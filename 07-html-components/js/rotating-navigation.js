const openBtn = document.querySelector('#open');
const closeBtn = document.querySelector('#close');
const container = document.querySelector('.container');
const navMenu = document.querySelector('.nav-menu');

openBtn.addEventListener('click', () => {
  container.classList.add('show-nav', 'rotate');
  setTimeout(() => navMenu.classList.add('active'), 500);
  
});

closeBtn.addEventListener('click', () => {
  container.classList.remove('show-nav');
  navMenu.classList.remove('active');
});