const leftSplit = document.querySelector('.split.left');
const rightSplit = document.querySelector('.split.right');
const container = document.querySelector('.container');

leftSplit.addEventListener('mouseover', () => {
  container.classList.add('hover-left');
  container.classList.remove('hover-right');
})

rightSplit.addEventListener('mouseover', () => {
  container.classList.add('hover-right');
  container.classList.remove('hover-left');
})

container.addEventListener('mouseout', () => {
  container.classList.remove('hover-right');
  container.classList.remove('hover-left');
})