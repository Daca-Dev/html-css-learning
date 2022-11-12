const sounds = document.querySelectorAll('audio')

function stopSounds() {
  sounds.forEach(sound => sound.pause());
}

sounds.forEach(soundTag => {
  const id = soundTag.getAttribute('id');
  const btn = document.createElement('button');

  btn.classList.add('btn');
  btn.innerText = id;
  btn.onclick = () =>{
    stopSounds();

    document.getElementById(id).play();
  };

  document.querySelector('#buttons-container').appendChild(btn)
})
