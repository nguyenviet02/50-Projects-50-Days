const input = document.querySelector('.input textarea');
const btn = document.querySelector('.btn');
const choices = document.querySelector('.choices');

function createChoice(list) {
  let html = "";
  list.forEach((choice, index) => {
    if (choice != "") {
      const item = `
      <div class="choice ${index}">
        <p>${choice}</p>
      </div>
    `;
      html += item;
    }
  });
  choices.innerHTML = html;
}
function randomChoice(list) {
  const speed = 100;
  const time = 10000;
  const interval = setInterval(() => {
    const random = Math.floor(Math.random() * list.length);
    list.forEach((choice) => {
      choice.classList.remove('active');
    });
    list[random].classList.add('active');
  }, speed);
  setTimeout(() => {
    clearInterval(interval);
    list.forEach((choice) => {
      choice.classList.remove('active');
    });
    list[Math.floor(Math.random() * list.length)].classList.add('active');
  }, time);
}

input.oninput = () => {
  const choices_list = input.value.split('\n');
  createChoice(choices_list);
}

btn.onclick = () => {
  const choices_list = document.querySelectorAll('.choice');
  randomChoice(choices_list);
}