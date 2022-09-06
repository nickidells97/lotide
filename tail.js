const tail = function(array) {
  const last = array.slice(1); //Will return every item of the array except the first. 
  return last;
};

module.exports = tail;

