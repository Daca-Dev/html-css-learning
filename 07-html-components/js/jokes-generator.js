const url = 'https://icanhazdadjoke.com/';
const pJoke = document.querySelector('.joke');

function getNewJoke() {

  fetch(url, { method: 'GET', headers: {'Accept': 'application/json'}})
    .then(resp => resp.json())
    .then(data => {
      const { joke } = data;
      pJoke.innerText = joke;
    })
}

document.querySelector('.btn').addEventListener('click', getNewJoke)

getNewJoke();