const assertArraysEqual = require('./assertArraysEqual');

const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (callback(item)) {
      break;
    } else {
      results.push(item);
    }
  }
  return results;
};

/*Tests
const numbers = [1, 2, 4, 5, 6, 7, 8, 9, 2, 4];

const emotions = ['happy', 'sad', 'scared', 'resentful', 'mad'];

const results1 = takeUntil(numbers, limit => limit > 6);

const results2 = takeUntil(emotions, limit => limit === 'scared');

assertArraysEqual(results1, [1, 2, 4, 5, 6]);

assertArraysEqual(results2, ['happy', 'sad']);
*/

module.exports = takeUntil;