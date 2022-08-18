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

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);

assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1]), true);