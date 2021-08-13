'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareStrings) {
    // write code here
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const currVal = this[i];
        const prevVal = this[i - 1];

        if (compareFunction(prevVal, currVal) > 0) {
          this[i - 1] = currVal;
          this[i] = prevVal;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

function compareStrings(a, b) {
  if (String(a) > String(b)) {
    return 1;
  }

  if (String(a) < String(b)) {
    return -1;
  }

  return 0;
}

module.exports = applyCustomSort;
