'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    for (let index = 0; index < this.length; index++) {
      for (let index2 = index + 1; index2 < this.length; index2++) {
        const a = this[index];
        const b = this[index2];

        const shouldSwap = compareFunction
          ? compareFunction(a, b) > 0
          : String(a) > String(b);

        if (shouldSwap && a !== b) {
          this[index] = b;
          this[index2] = a;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
