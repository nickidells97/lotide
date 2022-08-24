const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  return;
};
const eqArrays = function(arr1, arr2) {
  if(Array.isArray(arr1) && Array.isArray(arr2)) {
    if (arr1.length === arr2.length) {
      if (arr1.every((val, index) => val === arr2[index])) {
        return true
      } else {
        return false
      }
    }
  } 
}

// test code
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true) // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false) // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true) // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false) // => false