const playButton = document.getElementById("play");
const pointsSpan = document.getElementById("points");
const themeToggle = document.getElementById("theme");
let isDarkMode = false;
let counter = 0;

function playButtonHandler(event) {
  counter++; // counter = counter + 1
  pointsSpan.innerText = counter;
}

function themeToggleHandler(event) {
  if (isDarkMode === false) {
    document.body.style.backgroundImage = "linear-gradient(45deg, var(--primary-color), var(--secondary-color))";
  } else {
    document.body.style.backgroundImage = "linear-gradient(45deg, var(--primary-color), var(--third-color))";
  }

  isDarkMode = !isDarkMode;
}

playButton.addEventListener("click", playButtonHandler);
themeToggle.addEventListener("click", themeToggleHandler);
