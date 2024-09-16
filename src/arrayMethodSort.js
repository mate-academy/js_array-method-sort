'use strict';

/**
 * Implement method Sort
 */

function applyCustomSort() {
  [].__proto__.sort2 = function(
    compareFunction = (a, b) => String(a) > String(b)) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const result = compareFunction(this[i - 1], this[i]);

        if (result > 0) {
          [this[i - 1], this[i]] = [this[i], this[i - 1]];
          count++;
        }
      }
    } while (count);

    return this;
  };
}

module.exports = applyCustomSort;
