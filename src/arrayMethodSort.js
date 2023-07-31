'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = (a, b) =>
    String(a) > String(b)) {
    let count;

    do {
      count = false;

      for (let i = 0; i < this.length - 1; i++) {
        if (compareFunction(this[i], this[i + 1]) > 0) {
          count = true;
          [this[i], this[i + 1]] = [this[i + 1], this[i]];
        }
      }
    } while (count);

    return this;
  };
}

module.exports = applyCustomSort;
