'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const arr = this;
    const len = arr.length;

    for (let i = 0; i < len - 1; i++) {
      for (let j = i + 1; j < len; j++) {
        const a = arr[i];
        const b = arr[j];

        const shouldSwap = compareFunction
          ? compareFunction(a, b) > 0
          : String(a) > String(b);

        if (shouldSwap) {
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
      }
    }

    return arr;
  };
}

module.exports = applyCustomSort;
