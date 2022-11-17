'use strict';

/**
 * Implement method Sort
 */

function compareAsStrings(a, b) {
  if (String(a) > String(b)) {
    return 1;
  }

  if (String(a) < String(b)) {
    return -1;
  }

  return 0;
}

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    // write code here
  };
}

module.exports = applyCustomSort;
