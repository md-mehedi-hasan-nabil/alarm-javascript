const SET_TIME = 0;
const audio = document.querySelector('audio');
const timeInput = document.getElementById('time');
const button = document.getElementById('btn');
let hours = 0;
let runCount = 0;

timeInput.addEventListener('change', function () {
  hours = timeInput.value;
});

button.addEventListener('click', function () {
  setTimeout(function () {
    audio.play();
  }, hours);
});

audio.addEventListener('ended', function () {
  console.log('finish', runCount);
  if (runCount < 3) {
    runCount++;
    audio.play();
  }
});

function pause() {
  audio.pause();
}

function tomiliseconds(hrs = 1, min = 0, sec = 0) {
  return (hrs * 60 * 60 + min * 60 + sec) * 1000;
}

console.log(tomiliseconds(1, 0, 0));
