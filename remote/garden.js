


let preTags = document.querySelectorAll('pre');
let positions = [{x:5,y:5}];
let x; let y;
let placed;
const buffer = 12;
const pond = document.querySelector('#pond').getBoundingClientRect();

preTags.forEach(function (tag) {
  placed = false;
  loopBreak = 0;

  while(!placed) {
    x = Math.round(Math.random() * 95);
    y = Math.round(Math.random() * 95);

    let spacing = (pos) => {
      let fit = false;
       fit = (x > pos.x - buffer && x < pos.x + buffer) &&
             (y > pos.y - buffer && y < pos.y + buffer);

      const bcr = tag.getBoundingClientRect();
      const xPos = window.innerWidth * x/100 + bcr.width/2;
      const yPos = window.innerHeight * y/100 + bcr.height;
      const inPond = (xPos > pond.x && xPos < pond.x + pond.width && yPos > pond.y && yPos < pond.y + pond.height);
      return fit || inPond;
    }

    if (positions.find(spacing) === undefined) {
      positions.push({ x, y});
      tag.style.left = `${x}%`;
      tag.style.top = `${y}%`;
      placed = true;
    }

    if(loopBreak++ > 5000) {
      console.log('loop break..')
      placed = true;
    }
  }
});
