'use strict';

/**
 * Implement method Sort
 */

function compareAsStrings(a, b) {
  return a.toString() > b.toString();
}

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsStrings) {
    if (this.length < 2) {
      return this;
    }

    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const current = this[i];

        if (compareFunction(prev, current) > 0) {
          count++;
          this[i - 1] = current;
          this[i] = prev;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
