const btns = document.querySelectorAll('.btn');

btns.forEach(btn => {
  btn.onclick = () => {
    const audios = document.querySelectorAll('audio');
    audios.forEach(audio => {
      audio.pause();
    });
    const name = btn.innerText.toLowerCase();
    const audio = document.getElementById(name);
    audio.play();
  }
})