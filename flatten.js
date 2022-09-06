const flatten = function(array) {
  return array.reduce(
    (accumulator, item) => {
      if (Array.isArray(item)) {
        return [...accumulator, ...item];
      }
      return [...accumulator, item];
    }
    , []);
};
/* Tests
console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]
console.log(flatten([1, 2, [3, 4], 5, [6], [7, 8, 9]])) // => [1, 2, 3, 4, 5, 6]
*/

module.exports = flatten;