// Returns true if both objects have identical keys with identical values.
const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  const object1KeysArray = Object.keys(object1);
  const object2KeysArray = Object.keys(object2);
  if (object1KeysArray.length !== object2KeysArray.length) { //Checks to see if the object lengths are the same
    return false;
  }
  for (let key of object1KeysArray) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key]))  { //checks to see if the object keys are the same
      return eqArrays(object1[key], object2[key]);
    }
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;