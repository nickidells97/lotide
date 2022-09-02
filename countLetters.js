const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed:" + actual + " === " + expected);
  } else
    console.log("🛑🛑🛑 Assertion Failed:" + actual + " !== " + expected);
  return;
};

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


countLetters("lighthouse in the house")

module.exports = countLetters;
