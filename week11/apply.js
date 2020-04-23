var students = {
  'hwei-shin': {
    name: 'Hwei-Shin',
    a: (sentence) => {
      var newSentence = sentence;
      newSentence = [...newSentence];
      for (var n=0; n<newSentence.length; n++) {
        var i = newSentence[n];
        if (i === 'A' || i === 'a') {
          newSentence[n] = '<span style=\'color: purple;\'>'+ i + '</span>';
        }
        if (i === 'E' || i === 'e') {
          newSentence[n] = '<span style=\'color: orange;\'>'+ i + '</span>';
        }
        if (i === 'I' || i === 'i') {
          newSentence[n] = '<span style=\'color: green;\'>'+ i + '</span>';
        }
        if (i === 'O' || i === 'o') {
          newSentence[n] = '<span style=\'color: blue;\'>'+ i + '</span>';
        }
        if (i === 'U' || i === 'u') {
          newSentence[n] = '<span style=\'color: red;\'>'+ i + '</span>';
        }
      }
      return newSentence.join('');
    },
    b: (sentence) => {
      return sentence.toUpperCase();
    },
    c: (sentence) => {
      var newSentence = sentence;
      var frag = '<span style=\'font-size:40px; color:blue;\'>';
      newSentence = frag.concat(newSentence, '</span>');
      return newSentence;
    }
  },
  kayla: {
    name: 'Kayla',
    a: (sentence) => {
      var newSentence = sentence;
      return newSentence.replace(' stupid and ridiculous ', '<span style=\'varter-spacing: -2px; font-size: 1.4rem;\'> $ToOP1d and R!d1cuLu0$ </span>');
    },
    b: (sentence) => {
      var newSentence = sentence;
      return newSentence.replace(' tightly ', '<span style=\'varter-spacing: -2px; font-size: 1.4rem;\'> tightly </span>');
    },
    c: (sentence) => {
      var newSentence = sentence;
      return newSentence.replace(' stupid and ridiculous ', '<span style=\'writing-mode: vertical-rl;\'> stupid and ridiculous </span>' );
    }
  },
  miranda: {
    name: 'Miranda',
    a: (sentence) => {
      var newSentence = sentence;

      newSentence = newSentence.toUpperCase();
      newSentence = newSentence.replace(' THE ', '<span style=\'color: white;\'> THE </span>');
      newSentence = newSentence.replace(' AND ', '<span style=\'color: white;\'> AND </span>');
      newSentence = newSentence.replace(' BY ', '<span style=\'color: white;\'> BY </span>');

      return newSentence;
    },
    b: (sentence) => {
      var newSentence = sentence;
      newSentence = newSentence.replace('a', '<span style=\'color: red;\'>a</span>');
      newSentence = newSentence.replace('b', '<span style=\'font-weight: bold; color: red;\'>b</span>');
      newSentence = newSentence.replace('c', '<span style=\'color: red; font-size: 20px;\'>c</span>');
      return newSentence;
    },
    c: (sentence) => {
      var newSentence = sentence;
      newSentence = newSentence.replace(' he ', ' they ');
      newSentence = newSentence.replace(' she ', ' they ');
      newSentence = newSentence.replace(' his ', ' their ');
      newSentence = newSentence.replace(' hers ', ' their ');
      newSentence = newSentence.replace(' him ', ' them ');
      newSentence = newSentence.replace(' her ', ' them ');

      newSentence = newSentence.replace(' was ', ' were ');
      return newSentence;
    }
  },
  morgan: {
    name: 'Morgan',
    a: (sentence) => {
      var newSentence = sentence;
      newSentence = newSentence.replace(' window', ' <span style=\'border: solid black 1px\'>window</span> ');
      return newSentence;
    },
    b: (sentence) => {
      var newSentence = sentence;
      var newWords = [];
      var swapWords = {
        Old: 'the',
        Dudley: 'chair',
        the: 'Old',
        chair: 'Dudley',
      };

      var words = newSentence.split(' ');

      for (i = 0; i < words.length; i++) {
        if (words[i] in swapWords) {
          newWords.push(swapWords[words[i]]);
        }
        else {
          newWords.push(words[i]);

        }

      }

      newSentence = newWords.join(' ');
      return newSentence;
    },
    c: (sentence) => {
      var newSentence = sentence;
      var newWords = [];
      var words = newSentence.split(' ');
      for (i = 0; i < words.length; i++) {
        secondChar = words[i][1] || '';
        secondChar = secondChar.toUpperCase();
        secondChar = secondChar.replace(secondChar, '<span style=\'color: blue;\'>' + secondChar + '</span>');
        newWords.push(words[i].slice(0,1) + secondChar + words[i].slice(2));
      }

      newSentence = newWords.join(' ');
      return newSentence;
    }
  },
  lucas: {
    name: 'Lucas',
    a: (sentence) => {
      var newSentence = sentence;
      var newWords = [];
      var swapWords = {
        end: 'beginning',
        the: 'what looked like a',
        a: 'someone\'s',
      };

      var words = newSentence.split(' ');
      for (i = 0; i < words.length; i++) {
        if (words[i] in swapWords) {
          newWords.push(swapWords[words[i]]);
        }
        else {
          newWords.push(words[i]);
        }
      }

      newSentence = newWords.join(' ');
      return newSentence;

    },
    b: (sentence) => {
      var newSentence = sentence;
        newSentence = newSentence.replace('a', 'aaaa');
        newSentence = newSentence.replace('b', 'bbbb');
        newSentence = newSentence.replace('c', 'cccc');
        newSentence = newSentence.replace('d', 'dddd');
        newSentence = newSentence.replace('e', 'eeee');
        newSentence = newSentence.replace('f', 'ffff');
        newSentence = newSentence.replace('g', 'gggg');
        newSentence = newSentence.replace('h', 'hhhh');
        newSentence = newSentence.replace('i', 'iiii');
        newSentence = newSentence.replace('j', 'jjjj');
        newSentence = newSentence.replace('k', 'kkkk');
        newSentence = newSentence.replace('l', 'llll');
        newSentence = newSentence.replace('m', 'mmmm');
        newSentence = newSentence.replace('n', 'nnnn');
        newSentence = newSentence.replace('o', 'oooo');
        newSentence = newSentence.replace('p', 'pppp');
        newSentence = newSentence.replace('q', 'qqqq');
        newSentence = newSentence.replace('r', 'rrrr');
        newSentence = newSentence.replace('s', 'ssss');
        newSentence = newSentence.replace('t', 'tttt');
        newSentence = newSentence.replace('u', 'uuuu');
        newSentence = newSentence.replace('v', 'vvvv');
        newSentence = newSentence.replace('w', 'wwww');
        newSentence = newSentence.replace('x', 'xxxx');
        newSentence = newSentence.replace('y', 'yyyy');
        newSentence = newSentence.replace('z', 'zzzz');
        newSentence = newSentence.replace('.', '!');
        newSentence = newSentence.replace('?', '!');
        return newSentence;
    },
    c: (sentence) => {
      var newSentence = sentence;
      newSentence = newSentence.replace(',', ' (will anything  change) ');
      newSentence = newSentence.replace('!', ' (nothing really ends). ');
      newSentence = newSentence.replace('?', ' (you\'re left to figure things out on your own). ');
      newSentence = newSentence.replace('.', ' (it could have been real). ');
      newSentence = newSentence.replace(';', ' (the story isn\'t over) ');
      newSentence = newSentence.replace('...', ' (much was left unsaid). ');
      newSentence = newSentence.replace('\'s', ' (this was the last chance) ');
      newSentence = newSentence.replace('\'re', ' (the wind picked up). ');
      return newSentence;
    }
  },
  georgia: {
    name: 'Georgia',
    a: (sentence) => {
      var newSentence = sentence;
      newSentence = newSentence.fontcolor('green');
      newSentence= newSentence.fontsize('4%');
      return newSentence;
    },
    b: (sentence) => {
      var newSentence = sentence;
      newSentence = newSentence.toUpperCase();
      newSentence = newSentence.bold();
      return newSentence;
    },
    c: (sentence) => {
      var newSentence = sentence;
      newSentence = newSentence.repeat(3);
      newSentence = newSentence.fontsize('6%');
      newSentence = newSentence.fontcolor('blue');
      return newSentence;
    }
  },
  cassie: {
    name: 'Cassie',
    a: (sentence) => {
      var newSentence = sentence;

      newSentence = newSentence.replace(' babies ', ' dogs');
      newSentence = newSentence.replace(' Laughing ', '<span style=\'font-size: 5em;\'> Laughing </span>');
      newSentence = newSentence.replace(' bath ', '<span style=\'color: light blue;\'>, bath </span>');

      return newSentence;
    },
    b: (sentence) => {
      var newSentence = sentence;
      newSentence = newSentence.replace(' babies ', ' dogs');
      newSentence = newSentence.replace(' Laughing ', '<span style=\'font-size: 5em;\'> Laughing </span>');
      newSentence = newSentence.replace(' bath ', '<span style=\'color: light blue;\'>, bath </span>');

      return newSentence;
    },
    c: (sentence) => {
      var newSentence = sentence;
      newSentence = newSentence.replace(' babies ', ' dogs');
      newSentence = newSentence.replace(' Laughing ', '<span style=\'font-size: 5em;\'> Laughing </span>');
      newSentence = newSentence.replace(' bath ', '<span style=\'color: light blue;\'>, bath </span>');

      return newSentence;
    }
  },
  ayesha: {
    name: 'Ayesha',
    a: (sentence) => {
      var newSentence = sentence;
      newSentence = newSentence.toUpperCase();
      return newSentence;
    },
    b: (sentence) => {
      var newSentence = sentence;
      newSentence = newSentence.italics();
      return newSentence;
    },
    c: (sentence) => {
      var newSentence = sentence;
      newSentence = newSentence.replace(' stayed ', '<span style=\'color: red;\'> are staying </span>');
      newSentence = newSentence.replace(' read ', '<span style=\'color: red;\'> are reading </span>');
      newSentence = newSentence.replace(' listened, ', '<span style=\'color: red;\'> listening, </span>');
      newSentence = newSentence.replace(' rested, ', '<span style=\'color: red;\'> resting, </span>');
      newSentence = newSentence.replace(' exercised, ', '<span style=\'color: red;\'> exercising, </span>');
      newSentence = newSentence.replace(' made ', '<span style=\'color: red;\'> making </span>');
      newSentence = newSentence.replace(' learned ', '<span style=\'color: red;\'> learning </span>');
      newSentence = newSentence.replace(' listened ', '<span style=\'color: red;\'> listening </span>');
      newSentence = newSentence.replace(' meditated. ', '<span style=\'color: red;\'> meditating. </span>');
      newSentence = newSentence.replace(' began ', '<span style=\'color: red;\'> are beginning </span>');
      newSentence = newSentence.replace(' healed. ', '<span style=\'color: red;\'> are healing. </span>');
      return newSentence;
    }
  },
  disha: {
    name: 'Disha',
    a: (sentence) => {
      var newSentence = sentence;
      newSentence = newSentence.replace(' blackened ', '<span style=\'background-color: black; color: red; font-size:3rem;\'> reddened </span>');
      newSentence = newSentence.replace('red ', '<span style=\'background-color: red; color: black; font-size:3rem;\'> black </span>');
      return newSentence;
    },
    b: (sentence) => {
      var newSentence = sentence;
      newSentence = newSentence.toUpperCase(' blackened ', '<span style=\'background-color: black; color: red; font-size:3rem;\'> reddened </span>');
      return newSentence;
    },
    c: (sentence) => {
      var newSentence = sentence;
      newSentence = newSentence.bold(' blackened ');
      return newSentence;
    }
  },
  sherry: {
    name: 'Sherry',
    a: (sentence) => {
      var newSentence = sentence;

      newSentence = newSentence.replace(' window', ' <span style=\'border: solid black 2px\'>window</span> ');
      newSentence = newSentence.replace(' another window', ' <span style=\'border: 4px dotted #641212\'>another window</span> ');
      newSentence = newSentence.replace('Old Dudley', ' <span style=\'font-weight:bold\'>Old Dudley</span> ');
      newSentence = newSentence.replace(' gradually', ' <span style=\'varter-spacing: 2px;\'> gradually </span>');
      newSentence = newSentence.replace(' fifteen feet away into ', ' <span style=\'varter-spacing: 5px;\'> fifteen feet away into </span>');
      return newSentence;
    },
    b: (sentence) => {
      var newSentence = sentence;
      newSentence = newSentence.replace('Old ', ' Young ');
      newSentence = newSentence.replace(' folded ', ' spread ');
      newSentence = newSentence.replace(' gradually ', ' abruptly ');
      newSentence = newSentence.replace(' he ', ' she ');
      newSentence = newSentence.replace(' his ', ' her ');
      newSentence = newSentence.replace(' blackened ', ' bright ');
      newSentence = newSentence.replace(' red ', ' blue ');
      return newSentence;
    },
    c: (sentence) => {
      var newSentence = sentence;
      newSentence = newSentence.toUpperCase();
      return newSentence;
    }
  },
  irene: {
    name: 'Irene',
    a: (sentence) => {
      var newSentence = sentence;
      newSentence = newSentence.toUpperCase();
      return newSentence;
    },
    b: (sentence) => {
      var newSentence = sentence;
      newSentence = `<div style='font-family: chicago;font-size: 40px;color: red;'>${newSentence}</div>`;
      return newSentence;
    },
    c: (sentence) => {
      var newSentence = sentence;
      newSentence = newSentence.replace(/I/g, 'YOU');
      return newSentence;
    }
  },
  lexi: {
    name: 'Lexi',
    a: (sentence) => {
      var newSentence = sentence;
      newSentence = newSentence.replace('Old ', ' ');
      newSentence = newSentence.replace(' he was gradually molding ', ' ');
      newSentence = newSentence.replace(' to his own shape ', ' ');
      newSentence = newSentence.replace(' fifteen feet away ', ' ');

      newSentence = newSentence.replace(' framed ', ' ');
      newSentence = newSentence.replace(' by blackened red brick', '');

      newSentence = newSentence.replace(' very ', ' ');
      newSentence = newSentence.replace(' literally ', ' ');
      newSentence = newSentence.replace(' honestly ', ' ');
      newSentence = newSentence.replace(' just ', ' ');
      newSentence = newSentence.replace(' really ', ' ');
      newSentence = newSentence.replace(' as though ', ' ');
      newSentence = newSentence.replace(' simply ', ' ');
      newSentence = newSentence.replace(' absolutely ', ' ');
      newSentence = newSentence.replace(' basically ', ' ');
      newSentence = newSentence.replace(' actually ', ' ');
      newSentence = newSentence.replace(' sort of ', ' ');
      newSentence = newSentence.replace(' kind of ', ' ');
      newSentence = newSentence.replace(' a little ', ' ');
      newSentence = newSentence.replace(' that ', ' ');
      newSentence = newSentence.replace(' which ', ' ');
      newSentence = newSentence.replace(' some ', ' ');
      newSentence = newSentence.replace(' like ', ' ');
      newSentence = newSentence.replace(' of ', ' ');
      newSentence = newSentence.replace(' and then ', ' ');
      newSentence = newSentence.replace(' so ', ' ');
      newSentence = newSentence.replace(' such ', ' ');
      newSentence = newSentence.replace(' quite ', ' ');
      newSentence = newSentence.replace(' yet ', ' ');
      newSentence = newSentence.replace(' however ', ' ');
      newSentence = newSentence.replace(' that ', ' ');


      newSentence = newSentence.replace(' young ', ' ');
      newSentence = newSentence.replace(' tall ', ' ');
      newSentence = newSentence.replace(' short ', ' ');
      return newSentence;
    },
    b: (sentence) => {
      var newSentence = sentence;
      newSentence = newSentence.replace('Old ', ' Aged over the years with sweet time, ');
      newSentence = newSentence.replace(' chair ', ' designated area for seated comfort ');
      newSentence = newSentence.replace(' looked ', ' glanced over at something in the distance ');
      newSentence = newSentence.replace(' another ', ' a different, but similarly structured ');
      newSentence = newSentence.replace(' framed ', ' displayed in the individualized, visual perspective ');

      newSentence = newSentence.replace('I ', 'The Human that is in this physical body');
      newSentence = newSentence.replace(' bored ', ' undergoing an surplus of psychological questioning as to what is reality right now ');
      newSentence = newSentence.replace(' ok ', ' very medium and I am unsure to state my exact thoughts because I may want to conceal my feelings ');
      newSentence = newSentence.replace(' okay ', ' very medium and I am unsure to state my exact thoughts because I may want to conceal my feelings ');
      newSentence = newSentence.replace(' happy ', ' over the moon in joy and excietment ');
      newSentence = newSentence.replace(' sad ', ' really not feeling these conflicting vibes ');

      newSentence = newSentence.replace(' good ', ' actually really on the up side of things ');
      newSentence = newSentence.replace(' you ', ' you, an incredible human being ');
      return newSentence;
    },
    c: (sentence) => {
      var newSentence = sentence;
      newSentence = newSentence.replace(' old ', ' young ');
      newSentence = newSentence.replace('Old ', 'Young ');
      newSentence = newSentence.replace(' young ', ' old ');

      newSentence = newSentence.replace(' gradually ', ' abruptly ');
      newSentence = newSentence.replace(' abruptly ', ' gradually ');

      newSentence = newSentence.replace(' blackened ', ' lightened ');
      newSentence = newSentence.replace(' lightened ', ' blackened ');

      newSentence = newSentence.replace(' gradually ', ' abruptly ');
      newSentence = newSentence.replace(' blackened ', ' lightened ');

      newSentence = newSentence.replace(' young ', ' old ');
      newSentence = newSentence.replace(' tall ', ' short ');
      newSentence = newSentence.replace(' short ', ' tall ');

      newSentence = newSentence.replace(' rich ', ' poor ');
      newSentence = newSentence.replace(' poor ', ' rich ');

      newSentence = newSentence.replace(' happy ', ' sad ');
      newSentence = newSentence.replace(' sad ', ' happy ');

      newSentence = newSentence.replace(' expensive ', ' cheap ');
      newSentence = newSentence.replace(' cheap ', ' expensive ');

      newSentence = newSentence.replace(' dark ', ' light ');
      newSentence = newSentence.replace(' light ', ' dark ');

      newSentence = newSentence.replace(' different ', ' similar ');
      newSentence = newSentence.replace(' similar ', ' different ');

      newSentence = newSentence.replace(' imporant ', ' not important ');
      newSentence = newSentence.replace(' not important ', ' important ');

      newSentence = newSentence.replace(' large ', ' small ');
      newSentence = newSentence.replace(' small ', ' large ');

      newSentence = newSentence.replace(' popular ', ' unpopular ');
      newSentence = newSentence.replace(' unpopular ', ' popular ');

      newSentence = newSentence.replace(' hot ', ' cold ');
      newSentence = newSentence.replace(' cold ', ' hot ');

      newSentence = newSentence.replace(' healthy ', ' unhealthy ');
      newSentence = newSentence.replace(' unhealthy ', ' healthy ');

      newSentence = newSentence.replace(' strong ', ' weak ');
      newSentence = newSentence.replace(' weak ', ' strong ');

      newSentence = newSentence.replace(' successful ', ' failure ');
      newSentence = newSentence.replace(' failure ', ' successful ');

      newSentence = newSentence.replace(' interesting ', ' boring ');
      newSentence = newSentence.replace(' boring ', ' interesting ');

      newSentence = newSentence.replace(' nice ', ' mean ');
      newSentence = newSentence.replace(' mean ', ' nice ');
      return newSentence;
    }
  }
};

var sentences = document.querySelectorAll('p');
var sourceSentences = [];
sentences.forEach(sentence => {
  sourceSentences.push({ 'ele': sentence, 'text': sentence.innerText.match( /[^\.!\?]+[\.!\?]+/g ), 'html': sentence.innerHTML });
});

const appplyEffect = (student, method) => {
  sourceSentences.forEach(sentence => {
    if (!sentence.text) {
      return;
    }

    if (method === 'original') {
      return sentence.ele.innerHTML = sentence.html;
    }

    sentence.ele.innerHTML = '';
    sentence.text.forEach((s,idx) => {
      const fn = method === 'combined' ? student[['a','b','c'][idx % 3]] : student[method];
      sentence.ele.innerHTML += fn(s);
    });
  });
};

const body = document.querySelector('body');
const div = document.createElement('div');
div.style = 'z-index: 99999; position: fixed; top: 10px; right: 10px; background: #FFF; border: dashed 1px blue; padding: 15px; width: max-content; display: flex; flex-direction: column;';


const select = document.createElement('select');
select.setAttribute('id', 'pucd-student');
const option = document.createElement('option');
option.setAttribute('value', 'reset');
option.innerHTML = 'Choose Student';
select.appendChild(option);

Object.keys(students).forEach(key => {
  const student = students[key];
  const option = document.createElement('option');
  option.setAttribute('value', key);
  option.innerHTML = student.name;
  select.appendChild(option);
});
select.addEventListener('change', (evt) => {
  if (evt.target.value === 'reset') {
      sourceSentences.forEach((sentence, idx) => {
        sentence.ele.innerHTML = sentence.html;
      });
      return;
  }
  const student = students[evt.target.value];
  const sel = document.querySelector('#pucd-variation');
  const method = sel.options[sel.selectedIndex].value;
  appplyEffect(student, method);
});
div.appendChild(select);

const methodSelect = document.createElement('select');
methodSelect.setAttribute('id', 'pucd-variation');
methodSelect.style.marginTop = '5px';
methodSelect.innerHTML = '<option value=\'combined\'>Combined</option><option value=\'a\'>Variation 1</option><option value=\'b\'>Variation 2</option><option value=\'c\'>Variation 3</option><option value=\'original\'>Original</option>';
div.appendChild(methodSelect);
methodSelect.addEventListener('change', (evt) => {
  const method = evt.target.value;
  const sel = document.querySelector('#pucd-student');
  const student = students[sel.options[sel.selectedIndex].value];
  appplyEffect(student, method);
});

body.appendChild(div);