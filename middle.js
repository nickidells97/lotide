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

 const middle = function(array) {
  result = [];
  if (array.length % 2 === 0) {
    results = new Array(2);
    results[0] = array.length/2 
    results[1] = array.length/2 +1
  } else {
    results = new Array(1);
    result[0] = array.length/2
  }
  return results
 }

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]) // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [[3,4]]) // => [3, 4]