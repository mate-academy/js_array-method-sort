'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = ((a, b) =>
    a.toString() > b.toString())) {
    let count1 = 0;

    do {
      count1 = 0;

      for (let i = 0; i < this.length - 1; i++) {
        if (compareFunction(this[i], this[i + 1]) > 0) {
          [this[i], this[i + 1]] = [this[i + 1], this[i]];
          count1++;
        }
      }
    } while (count1 > 0);

    return this;
  };
}

module.exports = applyCustomSort;
