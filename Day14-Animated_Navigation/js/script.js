const menu = document.querySelector('.menu');
const btn = document.querySelector('.btn');

btn.onclick = () => {
  menu.classList.toggle('active');
}