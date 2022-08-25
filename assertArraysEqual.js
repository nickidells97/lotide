const eqArrays = function(arr1, arr2) {
  return Array.isArray(arr1) && Array.isArray(arr2) &&
        arr1.length === arr2.length &&
        arr1.every((val, index) => val === arr2[index]);
};

 const assertArraysEqual = function(actual, expected) {
  if (eqArrays) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  return;
 }

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]));

assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1]));