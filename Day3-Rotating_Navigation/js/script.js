const rotate = document.querySelector('.rotate');
const container = document.querySelector('.container');
const menu = document.querySelector('.menu');

rotate.onclick = () => {
  rotate.classList.toggle("active");
  container.classList.toggle("active");
  menu.classList.toggle("active");
}