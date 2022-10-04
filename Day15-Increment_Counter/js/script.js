const twitter = 12000;
const facebook = 15000;
const youtube = 10000;
const time = 10000;
const speed = 30;

const twitter_counter = document.querySelector(".twitter_counter");
const facebook_counter = document.querySelector(".facebook_counter");
const youtube_counter = document.querySelector(".youtube_counter");
console.log(twitter_counter);

function count(item, number) {
  let counter = 0;
  const plus = Math.floor((number/time)*speed);
  let interval = setInterval(() => {
    if (counter < number) {
      item.innerText = counter += plus;
    }
    else {
      clearInterval(interval);
      item.innerText = number;
    }
  }, speed)
}

count(twitter_counter, twitter);
count(facebook_counter, facebook);
count(youtube_counter, youtube);

