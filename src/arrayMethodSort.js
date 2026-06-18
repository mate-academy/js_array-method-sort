'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const arr = this;
    const len = arr.length;

    for (let i = 0; i < len - 1; i++) {
      for (let j = 0; j < len - i - 1; j++) {
        const a = arr[j];
        const b = arr[j + 1];
        let shouldSwap = false;

        if (a === undefined && b === undefined) {
          shouldSwap = false;
        } else if (a === undefined) {
          shouldSwap = true;
        } else if (b === undefined) {
          shouldSwap = false;
        } else {
          if (compareFunction) {
            shouldSwap = compareFunction(a, b) > 0;
          } else {
            shouldSwap = String(a) > String(b);
          }
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
