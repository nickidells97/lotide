const assertArraysEqual = require('./assertArraysEqual');

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i].trim();
    if (letter) {
      if (results[letter]) {
        results[letter].push(i);
      } else {
        results[letter] = [i];
      }
    }
  }
  return results;
};

//Tests
//letterPositions("lighthouse in the house")
// assertArraysEqual(letterPositions("hello").e, [1]);

module.exports = letterPositions;