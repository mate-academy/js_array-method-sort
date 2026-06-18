'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    let swapped;

    const compare = compareFunction || ((a, b) => a - b);

    for (let i = 0; i < this.length - 1; i++) {
      swapped = false;

      for (let j = 0; j < this.length - 1 - i; j++) {
        if (compare(this[j], this[j + 1]) > 0) {
          const swap = this[j];

          this[j] = this[j + 1];
          this[j + 1] = swap;
          swapped = true;
        }
      }

      if (!swapped) {
        break;
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
