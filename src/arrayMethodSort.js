'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - 1 - i; j++) {
        const first = this[j];
        const second = this[j + 1];

        let shouldSwap;

        if (compareFunction) {
          shouldSwap = compareFunction(first, second) > 0;
        } else {
          shouldSwap = String(first) > String(second);
        }

        if (shouldSwap) {
          this[j] = second;
          this[j + 1] = first;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
