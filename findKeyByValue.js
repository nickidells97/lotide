const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed:" + actual + " === " + expected);
  } else
    console.log("🛑🛑🛑 Assertion Failed:" + actual + " !== " + expected);
  return;
};

const findKeyByValue = function(genre, show) {
  let findKeys = Object.keys(genre);
  for (let key of findKeys) {
    if (genre[key] === show) {
      return key;
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;