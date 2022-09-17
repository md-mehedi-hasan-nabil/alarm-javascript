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
  notifyMe('Play alarm.');
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
  notifyMe('Alarm stoped');
  audio.pause();
}

function tomiliseconds(hrs = 1, min = 0, sec = 0) {
  return (hrs * 60 * 60 + min * 60 + sec) * 1000;
}

console.log(tomiliseconds(1, 0, 0));

function notifyMe(massage) {
  try {
    if (!('Notification' in window)) {
      alert('This browser does not support desktop notification');
    } else if (Notification.permission === 'granted') {
      const notification = new Notification(massage);
    } else if (Notification.permission !== 'denied') {
      // We need to ask the user for permission
      Notification.requestPermission().then((permission) => {
        // If the user accepts, let's create a notification
        if (permission === 'granted') {
          const notification = new Notification(massage);
        }
      });
    }
  } catch (error) {
    alert(error.massage);
  }
}
