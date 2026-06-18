'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const arr = this;

    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - 1 - i; j++) {
        const a = arr[j];
        const b = arr[j + 1];

        let shouldSwap;

        if (compareFunction) {
          shouldSwap = compareFunction(a, b) > 0;
        } else {
          shouldSwap = String(a) > String(b);
        }

        if (shouldSwap) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }

    return arr;
  };
}

module.exports = applyCustomSort;
