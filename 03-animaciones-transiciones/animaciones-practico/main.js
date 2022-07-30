const modal = document.querySelector('.modal');
const btn1 = document.querySelector('#btn1');
const closeBtn = document.querySelector('#close');

btn1.addEventListener('click', () => {
    modal.classList.remove('hidden');
    modal.classList.add('visible');
})

closeBtn.addEventListener('click', () => {
    modal.classList.remove('visible');
    modal.classList.add('hidden');
})