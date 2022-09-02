const eqArrays = function(arr1, arr2) {
  return Array.isArray(arr1) && Array.isArray(arr2) &&
        arr1.length === arr2.length &&
        arr1.every((val, index) => val === arr2[index]);
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (callback(item)) {
      break;
    } else {
      results.push(item);
    }
  }
  return results;
};
const numbers = [1, 2, 4, 5, 6, 7, 8, 9, 2, 4];

const emotions = ['happy', 'sad', 'scared', 'resentful', 'mad'];

const results1 = takeUntil(numbers, limit => limit > 6);

const results2 = takeUntil(emotions, limit => limit === 'scared');

assertArraysEqual(results1, [1, 2, 4, 5, 6]);

assertArraysEqual(results2, ['happy', 'sad']);

module.exports = takeUntil;