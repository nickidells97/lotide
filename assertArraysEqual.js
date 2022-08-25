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

 const assertArraysEqual = function(actual, expected) {
  if (eqArrays) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  return;
 }

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]));

assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1]));