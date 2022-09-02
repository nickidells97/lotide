const eqObjects = function(object1, object2) {
  const object1KeysArray = Object.keys(object1);
  const object2KeysArray = Object.keys(object2);
  if (object1KeysArray.length !== object2KeysArray.length) {
    return false;
  }
  for (let key of object1KeysArray) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key]))  {
      return eqArrays(object1[key], object2[key]);
    }
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};
const eqArrays = function(arr1, arr2) {
  return Array.isArray(arr1) && Array.isArray(arr2) &&
        arr1.length === arr2.length &&
        arr1.every((val, index) => val === arr2[index]);
};

  const assertObjectsEqual = function(actual, expected) {
    const inspect = require('util').inspect;
    if (eqObjects(actual, expected)) {
      console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    } else
      console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
    return;
    
}; 

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false

module.exports = assertObjectsEqual;
