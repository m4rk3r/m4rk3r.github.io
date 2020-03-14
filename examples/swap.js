let textbox = document.querySelector('#textbox');

let censoredWords = {
  apple: 'orange',
  bannan: 'grape',
  sad: 'happy'
};


function keyPress(event) {
  let cWords = Object.keys(censoredWords);
  cWords.forEach(function (word) {
    if (textbox.value.includes(`${word} `)) {
      textbox.value = textbox.value.replace(`${word} `, `${censoredWords[word]} `);
    }
  });
}




textbox.addEventListener('keyup', keyPress);
