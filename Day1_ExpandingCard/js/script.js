const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener("click", ()=> {
    const cardActive = document.querySelector('.card.active');
    cardActive.classList.remove('active');
    card.classList.add('active');
  });
});