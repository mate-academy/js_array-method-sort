'use strict';

/**
 * Implement method Sort
 */

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = (a, b) =>
    String(a) > String(b)) {
    let count = 0;

    do {
      count = 0;

      for (let i = 0; i < this.length - 1; i++) {
        const prev = this[i];
        const current = this[i + 1];

        if (compareFunction(prev, current) > 0) {
          count++;
          this[i] = current;
          this[i + 1] = prev;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
