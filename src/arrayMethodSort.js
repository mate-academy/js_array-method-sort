'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    // write code here
    const finalFunction =
      compareFunction ||
      function (a, b) {
        const x = String(a);
        const y = String(b);

        if (x < y) {
          return -1;
        }

        if (x > y) {
          return 1;
        }

        return 0;
      };

    const len = this.length;
    let swapped;

    do {
      swapped = false;

      for (let i = 0; i < len - 1; i++) {
        if (finalFunction(this[i], this[i + 1]) > 0) {
          [this[i], this[i + 1]] = [this[i + 1], this[i]];
          swapped = true;
        }
      }
    } while (swapped);

    return this;
  };
}

module.exports = applyCustomSort;
