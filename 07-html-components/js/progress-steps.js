let currStep = 0;
const steps = document.querySelectorAll('.circle');
const maxSteps = steps.length - 1;
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const progressBar = document.querySelector('#progress');

function controlDisabledBtn() {
  progressBar.setAttribute('style', `width: ${100/3 * currStep}%`);

  if (currStep > 0 && currStep < maxSteps) {
    nextBtn.removeAttribute('disabled');
    prevBtn.removeAttribute('disabled');
    return;
  } else if (currStep <= 0) {
    prevBtn.setAttribute('disabled', true);
    return;
  } else if (currStep >= maxSteps) {
    nextBtn.setAttribute('disabled', true)
    return;
  }
}

function updateProgress(action) {
  if (action === 'prev') {}
  else if (action === 'next') {}
}

nextBtn.addEventListener('click', () => {
  if (currStep === maxSteps) {
    return;
  }
  currStep++;
  steps[currStep].classList.add('active');
  controlDisabledBtn();
});

prevBtn.addEventListener('click', () => {
  if (currStep === 0) {
    return;
  }
  currStep--;
  steps[currStep + 1].classList.remove('active');
  controlDisabledBtn();
});

