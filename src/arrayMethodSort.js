'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(
    compareFunction = (a, b) => String(a) > String(b) ? 1 : -1) {
    let count;

    do {
      count = 0;

      for (let i = 0; i < this.length - 1; i++) {
        if (compareFunction(this[i], this[i + 1]) > 0) {
          count = 1;
          [this[i], this[i + 1]] = [this[i + 1], this[i]];
        }
      }
    } while (count === 1);

    return this;
  };
}

module.exports = applyCustomSort;
