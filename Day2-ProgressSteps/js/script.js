const progress = document.querySelector(".progress");
const next_btn = document.querySelector(".next");
const prev_btn = document.querySelector(".prev");
const steps = 4;
let now = 1;

next_btn.addEventListener("click", () => {
  if (now < steps) {
    now += 1;
    prev_btn.classList.add("active");
    progress.style.width = `${(now - 1) * 33.33}%`;
    const circle = document.querySelector(`.circle-${now}`);
    circle.classList.add("active");
  }
  if (now == steps) {
    next_btn.classList.remove('active');
  }
});
prev_btn.addEventListener("click", () => {
  if (now > 1) {
    now -= 1;
    prev_btn.classList.add("active");
    next_btn.classList.add("active");
    progress.style.width = `${(now - 1) * 33.33}%`;
    const circle = document.querySelector(`.circle-${now + 1}`);
    circle.classList.remove("active");
  }
  if (now == 1) {
    prev_btn.classList.remove("active");
  }
});
