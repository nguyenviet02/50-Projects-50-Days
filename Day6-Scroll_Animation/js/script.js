const box_container = document.querySelector('.box-container');

const box_number = 20;
const trigger = window.innerHeight * 0.8;

for (let i = 0; i < box_number; i++) {
  const box = document.createElement('div');
  box.classList.add('box');
  box.innerHTML = '<span class="content">Content</span>';
  ;
  box_container.appendChild(box);
};

const boxes = document.querySelectorAll('.box');
document.addEventListener('scroll', () => {
  boxes.forEach(box => {
    if (box.getBoundingClientRect().top < trigger) {
      box.classList.add('active');
    }
    else {
      box.classList.remove('active');
    }
  })
})
