'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const arr = this;

    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        let shouldSwap;

        if (compareFunction) {
          shouldSwap = compareFunction(arr[j], arr[j + 1]) > 0;
        } else {
          shouldSwap = String(arr[j]) > String(arr[j + 1]);
        }

        if (shouldSwap) {
          const temp = arr[j];

          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }

    return this;
  };
}
module.exports = applyCustomSort;
