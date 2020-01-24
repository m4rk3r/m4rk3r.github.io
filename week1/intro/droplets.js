var ctx;
var droplet = document.createElement('span');
droplet.classList.add('droplet');
document.body.appendChild(droplet);
var dpY = 0;
var speed = 2;
var canvas;
var stopPoint = _.random(window.innerHeight);
var dropClip = 75;
var minDim = 8;
var maxDim = 28;


// https://gist.github.com/gre/1650294
Ease = {
  easeInOutQuad: function (t) { return t<.5 ? 2*t*t : -1+(4-2*t)*t },
  easeInOutCubic: function (t) { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 },
  easeInOutQuart: function (t) { return t<.5 ? 8*t*t*t*t : 1-8*(--t)*t*t*t },
  easeInOutQuint: function (t) { return t<.5 ? 16*t*t*t*t*t : 1+16*(--t)*t*t*t*t }
}

function rgbToHsl(r, g, b){
    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;

    if(max == min){
        h = s = 0; // achromatic
    }else{
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max){
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    return [h, s, l];
}

function getRGBAtPixel(y, alpha) {
    if(typeof ctx === 'undefined') return 'rgba(255,255,255,0)';
    var rgb = ctx.getImageData(0, y, 1, 1).data;
    if(typeof alpha !== 'undefined')
        return 'rgba('+rgb[0]+','+rgb[1]+','+rgb[2]+','+alpha+')';
    else
        return 'rgb('+rgb[0]+','+rgb[1]+','+rgb[2]+')';
}

function getHSLPixel(y) {
    var rgb = ctx.getImageData(0, y, 1, 1).data;
    var hsl = rgbToHsl(rgb[0],rgb[1],rgb[2]);
    return [(hsl[0]*360 + 0.5) << 0, (hsl[1]*100 + 0.5) << 0, (hsl[2]*100 + 0.5) << 0];
}

function createOffscreenCanvas(){
    canvas = document.createElement('canvas');
    var _height = document.body.scrollHeight;
    canvas.width = 1;
    canvas.height = _height;
    ctx = canvas.getContext('2d');

    var grd = ctx.createLinearGradient(0,0,1,_height);
    for(i=0; i < colors.length; i++) {
        grd.addColorStop(colors[i][1], colors[i][0]);
    }

    ctx.fillStyle = grd;
    ctx.fillRect(0,0,1, _height);
}

var saturation = 20;
var lightness = 5;
var topLightness = 15;

function makeDrop(client) {
    var droplet = document.createElement('span');
    droplet.dataset['client'] = client;

    droplet.classList.add('droplet');

    var dim = _.random(minDim, maxDim);
    droplet.style.width = dim+'px';
    droplet.style.height = dim+'px';

    droplet.style.left = _.random(dim*0.5, window.innerWidth - dim*0.5)+'px';

    document.body.appendChild(droplet);
    return droplet;
}

function drawDrop(droplet, y) {
    y = Math.min(document.body.scrollHeight-dropClip, y);
    droplet.style.top = y+'px';

    var topColor = getHSLPixel(Math.max(1, y-30));
    var bottomColor = getHSLPixel(Math.min(document.body.scrollHeight-1, y+30));
    var topHSL = 'hsl('+topColor[0]+', '+Math.min(100,topColor[1]+saturation)+'%, '+(topColor[2]+topLightness)+'%)';
    var bottomHSL = 'hsl('+bottomColor[0]+', '+Math.min(100,bottomColor[1]+saturation)+'%, '+(bottomColor[2]+lightness)+'%)';

    droplet.style.background = 'linear-gradient(-45deg, '+topHSL+', '+bottomHSL+')';
}

function dropletDone(droplet, y) {
    y = Math.min(document.body.scrollHeight-dropClip, y);
    var topColor = getHSLPixel(Math.max(1, y-30));
    var bottomColor = getHSLPixel(Math.min(document.body.scrollHeight-1, y+30));
    var topHSL = 'hsl('+topColor[0]+', '+Math.min(100,topColor[1]+saturation)+'%, '+(topColor[2]+topLightness)+'%)';
    var bottomHSL = 'hsl('+bottomColor[0]+', '+Math.min(100,bottomColor[1]+saturation)+'%, '+(bottomColor[2]+lightness)+'%)';

    droplet.style.width = (parseInt(droplet.style.width,10) - _.random(-3,3))+'px';

    droplet.classList.add('at-rest');
    droplet.style.background = 'linear-gradient(-45deg, '+topHSL+', '+bottomHSL+')';

    // make oblong
    if(_.random(1)) {
        //if(_.random(10)<9) {
        droplet.style.borderTopRightRadius = _.random(30,60)+'%';
        droplet.style.borderTopLeftRadius = _.random(30,60)+'%';
        //}

        //if(_.random(10)<7)
        droplet.style.borderBottomRightRadius = _.random(40,60)+'%';

        //if(_.random(10)<8)
        droplet.style.borderBottomLeftRadius = _.random(40,60)+'%';
    }


    setTimeout(function (){
        this.classList.add('evaporate');
    }.bind(droplet), _.random( 30 * 1000, 1 * 60 * 1000));
}

function drawRain() {
    (function animate(){
        window.requestAnimationFrame(animate);

        if(_.random(1000) < 8) {
            var drop = document.createElement('span');
            var dim = _.random(minDim, maxDim);
            var rTop = _.random(window.innerHeight);
            drop.style.width = dim+'px';
            drop.style.height = dim+'px';
            drop.style.left = _.random(window.innerWidth)+'px';
            drop.style.top = rTop+'px';
            drop.classList.add('droplet');
            document.body.appendChild(drop);
            dropletDone(drop, rTop);
        }

        dpY += speed;

        drawDrop(droplet, stopPoint * Ease.easeInOutQuad(dpY/stopPoint));

        if(dpY > stopPoint) {
            dropletDone(droplet, dpY);

            dpY = 0;
            stopPoint = _.random(window.innerHeight-50);

            droplet = document.createElement('span');
            var dim = _.random(minDim, maxDim);
            speed = dim/4;
            droplet.style.left = _.random(window.innerWidth)+'px';
            droplet.style.width = dim+'px';
            droplet.style.height = dim+'px';
            droplet.classList.add('droplet');
            document.body.appendChild(droplet);
        }
    })();
}

$(window).load(createOffscreenCanvas);
window.addEventListener('resize', _.debounce(function () {
    var drops = document.querySelectorAll('.droplet');
    _.forEach(drops, function (drop){ document.body.removeChild(drop); });
    createOffscreenCanvas();
}, 500));
