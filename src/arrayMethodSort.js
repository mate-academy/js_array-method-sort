'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  /**
   * Custom sort method for arrays
   * @param {Function} [compareFunction] - Optional comparison function
   * @returns {Array} - Sorted array
   */
  [].__proto__.sort2 = function (compareFunction) {
    const arr = this;
    const len = arr.length;

    for (let i = 0; i < len - 1; i++) {
      for (let j = 0; j < len - 1 - i; j++) {
        const shouldSwap = compareFunction
          ? compareFunction(arr[j], arr[j + 1]) > 0
          : String(arr[j]) > String(arr[j + 1]);

        if (shouldSwap) {
          const temp = arr[j];

          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }

    return arr;
  };
}

module.exports = applyCustomSort;
