'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareStrings) {
    // write code here
    let swap;

    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (compareFunction(this[i], this[j]) > 0) {
          swap = this[i];
          this[i] = this[j];
          this[j] = swap;
        }
      }
    }

    return this;
  };
}

function compareStrings(a, b) {
  return String(a) > String(b) ? 1 : -1;
}
module.exports = applyCustomSort;
