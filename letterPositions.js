const eqArrays = function(arr1, arr2) {
  if (JSON.stringify(arr1) === JSON.stringify(arr2)) {
    return true
  } else {
    return false
  }
}

 const assertArraysEqual = function(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  return;
 }

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i].trim()
    if (letter) {
      if (results[letter]) {
        results[letter].push(i)
      } else {
        results[letter] = [i];
      }
    }
  }
  return results;
}

//letterPositions("lighthouse in the house")

assertArraysEqual(letterPositions("hello").e, [1]);

module.exports = letterPositions;