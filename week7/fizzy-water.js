function popBubble(event) {
  let hoverObject = event.target;
  if (hoverObject.classList.contains('bubble')) {
    hoverObject.classList.add('pop');
  }
}


let bubbleWrapper = document.querySelector('.bubble-wrapper');
bubbleWrapper.addEventListener('mouseover', popBubble);
