const question_btn = document.querySelectorAll(".question__btn");

question_btn.forEach((btn) => {
  btn.onclick = ()=> {
    btn.closest(".question").classList.toggle("active");
  }
})