let text = "I love apples and grapefruits so much!";

// an object! They store items in a key -> value relationship
// e.g. swapWords['apple'] will return 'orange'
let swapWords = {
  apple: 'orange',
  grapefruit: 'banana',
};

// this returns all the "keys" or first part of the key -> value relationship
let words = Object.keys(swapWords);

// loop over each of our swap keys
words.forEach(function (word) {
  // does it include the singular or plural swap word?
  if (text.includes(` ${word} `)) {
    text = text.replace(` ${word} `, ` ${swapWords[word]} `);
  } else if (text.includes(` ${word}s `)) {
    text = text.replace(` ${word}s `, ` ${swapWords[word]}s `);
  }
});

// outputs: "I love oranges and bananas so much!"
console.log(text);
