const without = function(source, itemsToRemove) {
  source = source.filter(function(remove) {
    return itemsToRemove.indexOf(remove) < 0;
  });
  return source;
};


/* Tests
assertArraysEqual(without([1, 2, 3], [1])); // => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
assertArraysEqual(without([1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 4, 6, 7])); // => [2, 3, 5, 8, 9,]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
*/

module.exports = without;