const middle = function(array) {
  let results = [];
  const array1 = array;
  if (array.length % 2 === 0) { //if the array is even, it will return the two middle-most values of the array
    results.push(array1.length / 2);
    results.push(array1.length / 2 + 1);
  } else {
    results.push(array1.length / 2); //If the array is odd, it will return the single middle-most value of the array
  }
  return results;
};

module.exports = middle;

