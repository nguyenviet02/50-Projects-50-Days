const blurry = document.querySelector('.blurry');
const blurry_percent = document.querySelector('.blurry-percent');
console.log([blurry.style]);

let blurry_percent_value = 100;

setInterval(() => {
  if (blurry_percent_value > 0) {
    blurry_percent_value -= 1;

    blurry_percent.innerText = `${100 - blurry_percent_value}%`;

    blurry.style.filter = `blur(${blurry_percent_value}px)`;
  }
  else if (blurry_percent_value === 0) {
    blurry_percent.style.display = 'none';
  };

}, 50);
