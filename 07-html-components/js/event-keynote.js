function buildContainer(obj) {
  const labels = ['key', 'charCode', 'code'];

  labels.forEach(label => {
    const span = document.getElementById(label);
    
    span.innerText = obj[label] ?? '';
  });
}

document.querySelector('body').addEventListener('keypress', (event) => {
  const { code, key, charCode } = event;

  buildContainer({key, charCode, code});

  document.querySelector('.container .event-container').classList.remove('hidden');
  document.querySelector('.container .text').innerText = 'The event was'
})