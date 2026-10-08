'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    for (let pass = 0; pass < this.length - 1; pass++) {
      for (let i = 0; i < this.length - 1; i++) {
        let shouldSwap;

        if (!compareFunction) {
          shouldSwap = String(this[i]) > String(this[i + 1]);
        } else {
          shouldSwap = compareFunction(this[i], this[i + 1]) > 0;
        }

        if (shouldSwap) {
          const temp = this[i];

          this[i] = this[i + 1];
          this[i + 1] = temp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
