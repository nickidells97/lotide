const middle = function(array) {
  let results = [];
  if (array.length % 2 === 0) {
    results = new Array(2);
    results[0] = array.length / 2;
    results[1] = array.length / 2 + 1;
  } else {
    results = new Array(1);
    results[0] = array.length / 2;
  }
  return results;
};

module.exports = middle;

