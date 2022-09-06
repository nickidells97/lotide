const findKey = function(object, callback) {
  for (let key in object) {
    if (callback(object[key])) { //uses a callback to call the function containing the object
      return key; //returns the key which matches the key being looked for in the object
    }
  }
};

module.exports = findKey;