
let textbox = document.querySelector('#textbox');


let keyThreshold = {
  'a': 5,
  'b': 2,
  'c': 2,
  'd': 2,
  'e': 2,
  'f': 2
}
let keyCounter = {
  'a': 0,
  'b': 0,
  'c': 0,
  'd': 0,
  'e': 0,
  'f': 0
}
let keySound = {
  'a': 'bird.wav',
  'b': 'duck.mp3',
  'c': 'frog.mp3',
  'd': 'turtle.mp3',
  'e': 'bird.mp3',
  'f': 'fox.mp3',
}

function keyPress(event) {
  if (Object.keys(keyCounter).includes(event.key)) {
    keyCounter[event.key] += 1;

    console.log(keyCounter[event.key], keyCounter[event.key] % keyThreshold[event.key]);
    if (keyCounter[event.key] % keyThreshold[event.key] == 0) {
      console.log(event.key, 'hit threshold! play sound!');
      let audio = document.querySelector('audio');
      audio.src = keySound[event.key];
      audio.loop = true;
      audio.play();
    }
  }
}


textbox.addEventListener('keyup', keyPress);
//$('#textbox').on('keyup', keyPress);
