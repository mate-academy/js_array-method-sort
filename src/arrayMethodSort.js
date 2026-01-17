'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const arr = this;

    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - 1; j++) {
        const a = arr[j];
        const b = arr[j + 1];
        let shouldSwap;

        if (typeof compareFunction === 'function') {
          shouldSwap = compareFunction(a, b) > 0;
        } else {
          shouldSwap = String(a) > String(b);
        }

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
