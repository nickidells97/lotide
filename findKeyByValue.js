const findKeyByValue = function(genre, show) {
  let findKeys = Object.keys(genre);
  for (let key of findKeys) {
    if (genre[key] === show) { //Checks for the value of the key in the object matches the show we are looking for 
      return key;
    }
  }
};

/* Tests
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
*/

module.exports = findKeyByValue;