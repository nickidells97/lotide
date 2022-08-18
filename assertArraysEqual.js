const eqArrays = (arr1, arr2) =>
  arr1.length === arr2.length &&
  arr1.every((v, i) => v === arr2[i]);

 const assertArraysEqual = function(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  return;
 }

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);

assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1]), true);