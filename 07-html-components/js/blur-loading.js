const loadingtext = document.querySelector('.loading-text');
const bgContainer = document.querySelector('.bg');
let loadValue = 0;
const maxBlur = 100;

function updateLoading(value) {
  loadingtext.textContent = `${value} %`;
  loadingtext.style.opacity = scale(maxBlur - value);

  bgContainer.style.filter = `blur(${maxBlur - value}px)`
}

function scale (value, inMin=0, inMax=maxBlur, outMin=0, outMax=1) {
  return (value - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

const interval = setInterval(() => {
  updateLoading(loadValue);
  loadValue++;

  if(loadValue > maxBlur) {
    clearInterval(interval);
    loadingtext.style.display = 'none';
  }
}, 30)