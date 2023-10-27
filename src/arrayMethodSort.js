'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction =
  (a, b) => String(a) > String(b) ? 1 : -1) {
    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        const a = this[i];
        const b = this[j];
        const shouldSwap = compareFunction(a, b) > 0;

        if (shouldSwap) {
          this[i] = b;
          this[j] = a;
        }
      }
    }

    return this;
  };
}
applyCustomSort();

module.exports = applyCustomSort;
