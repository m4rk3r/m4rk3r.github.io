

function bubblePopped(bubbleEvt) {
  let hoverObject = bubbleEvt.target;
  if (bubbleEvt.propertyName == 'opacity') {
    hoverObject.style.left = Math.round(100 * Math.random()) + '%';
    hoverObject.style.top = Math.round(100 * Math.random()) + '%';
    hoverObject.classList.remove('pop');
    hoverObject.removeEventListener('transitionend', bubblePopped);
  }
}


function releaseBubble(evt) {
  let hoverObject = evt.target;
  if (hoverObject.classList.contains('bubble')) {
    hoverObject.classList.add('pop');

    // advanced
    hoverObject.addEventListener('transitionend', bubblePopped);
  }
}


const bubble = document.querySelector('#water');
bubble.addEventListener('mouseover', releaseBubble);
