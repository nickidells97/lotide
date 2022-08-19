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

const flatten = function (array) {
  return array.reduce(
    (accumulator, item) => {
      if (Array.isArray(item)) {
        return [...accumulator, ...item];
      }
      return [...accumulator, item];
    }
 , []);
}

console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]
console.log(flatten([1, 2, [3, 4], 5, [6], [7, 8, 9]])) // => [1, 2, 3, 4, 5, 6]