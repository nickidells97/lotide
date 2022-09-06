const eqArrays = function(arr1, arr2) {
  return Array.isArray(arr1) && Array.isArray(arr2) && //Check if both items are arrays
        arr1.length === arr2.length && //check if both arrays are the same length
        arr1.every((val, index) => val === arr2[index]); //check if every value at every index of both arrays are equal
};

module.exports = eqArrays;