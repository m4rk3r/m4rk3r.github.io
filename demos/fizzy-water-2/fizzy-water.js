
function bubblePopped(evt) {
  let hoverObject = evt.target;
  if (evt.propertyName == 'opacity') {
    hoverObject.style.top = `${Math.round(Math.random() * 100)}%`;
    hoverObject.style.left = `${Math.round(Math.random() * 95)}%`;

    hoverObject.classList.remove('pop');
    hoverObject.removeEventListener('transitionend', bubblePopped);
  }
}

function popBubble(event) {
  let hoverObject = event.target;
  if (hoverObject.classList.contains('bubble')) {
    hoverObject.classList.add('pop');

    hoverObject.addEventListener('transitionend', bubblePopped);
  }
}


let bubbleWrapper = document.querySelector('.bubble-wrapper');
bubbleWrapper.addEventListener('mouseover', popBubble);

for (let i = 0; i < 75; i++) {
  let bubble = document.createElement('div');
  bubble.className = 'bubble';
  bubble.style.top = `${Math.round(Math.random() * 100)}%`;
  bubble.style.left = `${Math.round(Math.random() * 95)}%`;
  bubbleWrapper.append(bubble);
}
