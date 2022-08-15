const url = "https://icanhazdadjoke.com/";
const story = document.querySelector('.story p');
const btn = document.getElementById('btn');

(generateJoke = () => {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  fetch('https://icanhazdadjoke.com', config)
    .then((res) => res.json())
    .then((data) => {
      story.innerText = data.joke;
    })
})();

btn.onclick = generateJoke;
