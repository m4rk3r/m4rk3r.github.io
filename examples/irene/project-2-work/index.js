
var entryCount = 0;
var displayCount = 0;



$(document).ready(function() {

  //capture key presses
  $(document).on("keypress", function(e) {
    e.preventDefault();
    entryCount ++;
    displayCount ++;
 console.log(displayCount);



    char = String.fromCharCode(e.which);
    console.log("entry #" + entryCount + " : " + e.which + " | " + char + ". Showing " + displayCount);


    createElement(char);
  });


  //capture function keys
  $(document).on("keydown", function(e) {
    //if pressed key is a backspace
    if (e.which == 8){
      e.preventDefault();
      entryCount ++;
      displayCount --;

      console.log("entry #" + entryCount + " : " + e.which + " | BKSP. Showing " + displayCount);
      deleteElement();





    }


});



  });

function createElement(k) {
  var elem = $('#cursor');
  var elemp = $('#prounce_cursor');
  // var init = displayCount;
  // console.log(displayCount);

  if (k == "a" || k == "A") { elem.before('<span class="inner letter-a">A</span>');
  elemp.before('<span class="inner_p">ache+</span>');
   var audio = $(".one")[0];

    audio.play();
       audio.loop = true;
       $('.one').prop("volume", 1);

       $('.mark').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
})
$('.spacing').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
})
}


  if (k == "b" || k == "B") { elem.before('<span class="inner letter-b">B</span>');
  elemp.before('<span class="inner_p">bee+</span>');
     var audio = $(".two")[0];

    audio.play();
       audio.loop = true;
       $('.two').prop("volume", 1);

              $('.mark').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
})
              $('.spacing').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
})
}
  if (k == "c" || k == "C") { elem.before('<span class="inner">C</span>');
  elemp.before('<span class="inner_p">sea+</span>');
        var audio = $(".three")[0];

    audio.play();
       audio.loop = true;
       $('.three').prop("volume", 1);

              $('.mark').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
})
              $('.spacing').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
})
     }
  if (k == "d" || k == "D") { elem.before('<span class="inner">D</span>');
  elemp.before('<span class="inner_p">deep+</span>');
     var audio = $(".four")[0];

    audio.play();
       audio.loop = true;
       $('.four').prop("volume", 1);

              $('.mark').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
})
              $('.spacing').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
})
}
  if (k == "e" || k == "E") { elem.before('<span class="inner">E</span>');
  elemp.before('<span class="inner_p">eat+</span>');
     var audio = $(".five")[0];

    audio.play();
       audio.loop = true;
       $('.five').prop("volume", 1);

              $('.mark').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
})
              $('.spacing').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
})
}
  if (k == "f" || k == "F") { elem.before('<span class="inner">F</span>');
  elemp.before('<span class="inner_p">feet+</span>');
     var audio = $(".six")[0];

    audio.play();
       audio.loop = true;
       $('.six').prop("volume", 1);

              $('.mark').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
})
              $('.spacing').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
})
}
  if (k == "g" || k == "G") { elem.before('<span class="inner">G</span>');
  elemp.before('<span class="inner_p">gee+</span>');
     var audio = $(".seven")[0];

    audio.play();
       audio.loop = true;
       $('.seven').prop("volume", 1);

              $('.mark').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
})
              $('.spacing').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
})
}
  if (k == "h" || k == "H") { elem.before('<span class="inner">H</span>');
  elemp.before('<span class="inner_p">cheese+</span>');
     var audio = $(".eight")[0];

    audio.play();
       audio.loop = true;
       $('.eight').prop("volume", 1);

              $('.mark').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
})
              $('.spacing').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
})
}
  if (k == "i" || k == "I") { elem.before('<span class="inner">I</span>');
  elemp.before('<span class="inner_p">eye+</span>');
     var audio = $(".nine")[0];

    audio.play();
       audio.loop = true;
       $('.nine').prop("volume", 1);

              $('.mark').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
})
              $('.spacing').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
})
}
  if (k == "j" || k == "J") { elem.before('<span class="inner">J</span>');
  elemp.before('<span class="inner_p">jelly+</span>')
     var audio = $(".ten")[0];

    audio.play();
       audio.loop = true;
       $('.ten').prop("volume", 1);

              $('.mark').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
})
              $('.spacing').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
})
}
  if (k == "k" || k == "K") { elem.before('<span class="inner">K</span>');
  elemp.before('<span class="inner_p">cat+</span>');
     var audio = $(".eleven")[0];

    audio.play();
       audio.loop = true;
       $('.eleven').prop("volume", 1);

              $('.mark').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
})
              $('.spacing').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
})
}
  if (k == "l" || k == "L") { elem.before('<span class="inner">L</span>');
  elemp.before('<span class="inner_p">air+</span>');
     var audio = $(".twelve")[0];

    audio.play();
       audio.loop = true;
       $('.twelve').prop("volume", 1);

              $('.mark').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
})
              $('.spacing').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
})
}
  if (k == "m" || k == "M") { elem.before('<span class="inner">M</span>');
  elemp.before('<span class="inner_p">mouse+</span>');
     var audio = $(".thirteen")[0];

    audio.play();
       audio.loop = true;
       $('.thirteen').prop("volume", 1);

              $('.mark').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
})
              $('.spacing').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
})
}
  if (k == "n" || k == "N") { elem.before('<span class="inner">N</span>');
  elemp.before('<span class="inner_p">ant+</span>');
     var audio = $(".fourteen")[0];

    audio.play();
       audio.loop = true;
       $('.fourteen').prop("volume", 1);

              $('.mark').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
})
              $('.spacing').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
})
}
  if (k == "o" || k == "O") { elem.before('<span class="inner">O</span>');
  elemp.before('<span class="inner_p">ox+</span>');
     var audio = $(".fifteen")[0];

    audio.play();
       audio.loop = true;
       $('.fifteen').prop("volume", 1);

              $('.mark').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
})
              $('.spacing').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
})
}
  if (k == "p" || k == "P") { elem.before('<span class="inner">P</span>');
  elemp.before('<span class="inner_p">pea+</span>');
     var audio = $(".sixteen")[0];

    audio.play();
       audio.loop = true;
       $('.sixteen').prop("volume", 1);

              $('.mark').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
})
              $('.spacing').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
})
}
  if (k == "q" || k == "Q") { elem.before('<span class="inner">Q</span>');
  elemp.before('<span class="inner_p">cute+</span>');
     var audio = $(".seventeen")[0];

    audio.play();
       audio.loop = true;
       $('.seventeen').prop("volume", 1);

              $('.mark').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
})
              $('.spacing').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
})
}
  if (k == "r" || k == "R") { elem.before('<span class="inner">R</span>');
  elemp.before('<span class="inner_p">army+</span>');
     var audio = $(".eighteen")[0];

    audio.play();
       audio.loop = true;
       $('.eighteen').prop("volume", 1);

              $('.mark').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
})
              $('.spacing').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
})
}
  if (k == "s" || k == "S") { elem.before('<span class="inner">S</span>');
  elemp.before('<span class="inner_p">snake+</span>');
 var audio = $(".nineteen")[0];

    audio.play();
       audio.loop = true;
       $('.nineteen').prop("volume", 1);

              $('.mark').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
})
$('.spacing').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
})
     }
  if (k == "t" || k == "T") { elem.before('<span class="inner">T</span>');
  elemp.before('<span class="inner_p">tea+</span>');
 var audio = $(".twenty")[0];

    audio.play();
       audio.loop = true;
       $('.twenty').prop("volume", 1);

              $('.mark').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
})
              $('.spacing').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
})
     }
  if (k == "u" || k == "U") { elem.before('<span class="inner">U</span>');
  elemp.before('<span class="inner_p">universe+</span>');
 var audio = $(".twenty_one")[0];

    audio.play();
       audio.loop = true;
$('.twenty_one').prop("volume", 1);

       $('.mark').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
})
       $('.spacing').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
})
     }
  if (k == "v" || k == "V") { elem.before('<span class="inner">V</span>');
  elemp.before('<span class="inner_p">victory+</span>');
 var audio = $(".twenty_two")[0];

    audio.play();
       audio.loop = true;
$('.twenty_two').prop("volume", 1);

       $('.mark').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
})
       $('.spacing').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
})
     }
  if (k == "w" || k == "W") { elem.before('<span class="inner">W</span>');
  elemp.before('<span class="inner_p">DayBlue+</span>');
  var audio = $(".twenty_three")[0];

    audio.play();
       audio.loop = true;
    $('.twenty_three').prop("volume", 1);

           $('.mark').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
})
           $('.spacing').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
})
 }
  if (k == "x" || k == "X") { elem.before('<span class="inner">X</span>');
  elemp.before('<span class="inner_p">x-ray+</span>');
 var audio = $(".twenty_four")[0];

    audio.play();
       audio.loop = true;
       $('.twenty_four').prop("volume", 1);

              $('.mark').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
})
              $('.spacing').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
})
}
  if (k == "y" || k == "Y") { elem.before('<span class="inner">Y</span>');
  elemp.before('<span class="inner_p">why+</span>');
 var audio = $(".twenty_five")[0];

    audio.play();
       audio.loop = true;
       $('.twenty_five').prop("volume", 1);

              $('.mark').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
})
              $('.spacing').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
})
}
  if (k == "z" || k == "Z") { elem.before('<span class="inner">Z</span>');
  elemp.before('<span class="inner_p">zip+</span>');
 var audio = $(".twenty_six")[0];

    audio.play();
       audio.loop = true;
       $('.twenty_six').prop("volume", 1);

              $('.mark').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
})
$('.spacing').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
})

}

if (k == ".") { elem.before('<span class="inner">.</span>');
elemp.before('<span class="inner_p">ðŸ˜/</span>');

var audio = $(".twenty_seven")[0];

    audio.play();
       audio.loop = true;
       $('.twenty_seven').prop("volume", 1);


$('.letter').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
})
$('.spacing').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
})
}

if (k == "!") { elem.before('<span class="inner">!</span>');
elemp.before('<span class="inner_p">ðŸ¶/</span>');

var audio = $(".twenty_eight")[0];

    audio.play();
       audio.loop = true;
       $('.twenty_eight').prop("volume", 1);

$('.letter').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
})
$('.spacing').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
})
}

if (k == "?") { elem.before('<span class="inner">?</span>');
elemp.before('<span class="inner_p">ðŸµ/</span>');

var audio = $(".twenty_nine")[0];

    audio.play();
       audio.loop = true;
       $('.twenty_nine').prop("volume", 1);

$('.letter').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
})
$('.spacing').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
})
}

if (k == ";") { elem.before('<span class="inner">;</span>');
elemp.before('<span class="inner_p">ðŸ”/</span>');

var audio = $(".thirty")[0];

    audio.play();
       audio.loop = true;
       $('.thirty').prop("volume", 1);

$('.letter').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
})
$('.spacing').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
})
}

if (k == ":") { elem.before('<span class="inner">:</span>');
elemp.before('<span class="inner_p">ðŸ¦ï¸/</span>');

var audio = $(".thirty_one")[0];

    audio.play();
       audio.loop = true;
       $('.thirty_one').prop("volume", 1);

$('.letter').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
})
$('.spacing').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
})
}

if (k == ",") { elem.before('<span class="inner">,</span>');
elemp.before('<span class="inner_p">ðŸ»/</span>');

var audio = $(".thirty_two")[0];

    audio.play();
       audio.loop = true;
       $('.thirty_two').prop("volume", 1);

$('.letter').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
})
$('.spacing').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
})
}

if (k == "/") { elem.before('<span class="inner">/</span>');
elemp.before('<span class="inner_p">ðŸ¦Š/</span>');

var audio = $(".thirty_three")[0];

    audio.play();
       audio.loop = true;
       $('.thirty_three').prop("volume", 1);

$('.letter').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
})
$('.spacing').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
})
}

 if (k == "'") { elem.before('<span class="inner">`</span>');
}

if (k == " ") { elem.before('<span class="inner">&nbsp;</span>');
elemp.before('<span class="inner_p">ðŸ°/</span>');

var audio = $(".thirty_four")[0];

    audio.play();
       audio.loop = true;
       $('.thirty_four').prop("volume", 1);

$('.letter').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
})
$('.mark').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
})
   }
}

let letterSounds = {
  'a': 'one',
  'b': 'two',
  'c': 'three'
}


function deleteElement() {
  let letter = $(".inner").last().text().toLowerCase();
  if (letterSounds[letter] && $(`.letter-${letter}`).length == 1) {
    var audio = $(`.${letterSounds[letter]}`)[0];
    audio.pause();
    audio.currentTime = 0;
  }

  $(".inner").last().remove();
  $(".inner_p").last().remove();
}
