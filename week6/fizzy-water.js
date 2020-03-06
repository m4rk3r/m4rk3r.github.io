

function bubblePopped(bubbleEvt) {
  let hoverObject = bubbleEvt.target;
  if (bubbleEvt.propertyName == 'opacity') {
    hoverObject.style.left = Math.round(95 * Math.random()) + '%';
    hoverObject.style.top = Math.round(100 * Math.random()) + '%';
    hoverObject.classList.remove('pop');
    hoverObject.removeEventListener('transitionend', bubblePopped);
  }
}


function releaseBubbles(evt) {
  let bubbles = document.querySelectorAll('.bubble');
  bubbles.forEach(function (bubble) {
      bubble.classList.add('pop');
      bubble.addEventListener('transitionend', bubblePopped);
  });
}


const bubble = document.querySelector('#glass');
bubble.addEventListener('click', releaseBubbles);
