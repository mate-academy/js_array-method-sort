'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    // write code here
    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - i - 1; j++) {
        const a = this[j];
        const b = this[j + 1];
        const shouldSwap = compareFunction
          ? compareFunction(a, b) > 0
          : String(a) > String(b);

        if (shouldSwap) {
          [this[j], this[j + 1]] = [b, a];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
