const searchBtn = document.querySelector('.btn');
const inputSearch = document.querySelector('.search');

function toggleInput() {
  const state = inputSearch.classList.contains('active');

  if (state) {
    inputSearch.classList.remove('active');
  } else {
    inputSearch.classList.add('active');
  }
}

searchBtn.addEventListener('click', () => {
  toggleInput();
});