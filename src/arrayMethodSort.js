'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction
  = (a, b) => a.toString() > b.toString()) {
    for (let i = 0; i < this.length - 1; i++) {
      if (compareFunction(this[i], this[i + 1]) > 0) {
        const biggerValue = this[i];

        this[i] = this[i + 1];
        this[i + 1] = biggerValue;

        if (i > 0) {
          i -= 2;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
