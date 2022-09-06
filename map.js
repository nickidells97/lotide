const assertArraysEqual = ('./assertArraysEqual');


const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

/* Tests
const results1 = map(words, word => word[0]);

const words = ["ground", "control", "to", "major", "tom"];
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't'])
assertArraysEqual([results1[3], results1[4]], ['m', 't'])
assertArraysEqual([results1[2], results1[1]], ['t', 'c'])
*/

module.exports = map;