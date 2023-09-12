'use strict';

/**
 * Implement method Sort
 */

function applyCustomSort() {
  const defaultCompare = (a, b) => String(a) > String(b);

  [].__proto__.sort2 = function(compareFunction = defaultCompare) {
    const amount = this.length;

    for (let i = 0; i < amount; i++) {
      for (let j = 0; j < amount - i - 1; j++) {
        const needToSwap = compareFunction(this[j], this[j + 1]) > 0;

        if (needToSwap) {
          [this[j], this[j + 1]] = [this[j + 1], this[j]];
        }
      }
    }

    return this;
  };
}
module.exports = applyCustomSort;
