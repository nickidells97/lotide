const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) { 
    if (itemsToCount[item]) { // If statement used to count how many times the chosen item appears in a list 
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

module.exports = countOnly;