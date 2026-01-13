'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFn) {
    const arr = this;

    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - 1 - i; j++) {
        const a = arr[j];
        const b = arr[j + 1];

        const shouldSwap = compareFn
          ? compareFn(a, b) > 0
          : String(a) > String(b);

        if (shouldSwap) {
          arr[j] = b;
          arr[j + 1] = a;
        }
      }
    }

    return arr;
  };
}

module.exports = applyCustomSort;
