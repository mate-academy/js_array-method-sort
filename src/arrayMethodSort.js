'use strict';

/**
 * Implement method Sort
 */

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = (a, b) => {
    return String(a) > String(b);
  }) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const previous = this[i - 1];
        const current = this[i];

        if (compareFunction(previous, current) > 0) {
          count++;
          this[i] = previous;
          this[i - 1] = current;
        }
      }
    } while (count);

    return this;
  };
}

module.exports = applyCustomSort;
