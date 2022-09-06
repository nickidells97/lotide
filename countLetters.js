const countLetters = function(sentence) {
  let array = sentence.split('')
  const results = {}; 
    for (const item of array) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
      delete results[' '];
  }
  console.log(results);
}

// Tests
// countLetters("lighthouse in the house")

module.exports = countLetters;
