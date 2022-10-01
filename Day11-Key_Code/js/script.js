const board = document.querySelector('.board');
const key = document.querySelector('.key');
const keyCode = document.querySelector('.keyCode');
const code = document.querySelector('.code');
const main = document.querySelector('.main');

window.addEventListener("keydown", (e) => {
  board.classList.add('hide');
  main.classList.remove('hide');
  key.innerText = e.key;
  keyCode.innerText = e.keyCode;
  code.innerText = e.code;
})