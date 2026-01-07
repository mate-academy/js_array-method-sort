'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFn) {
    const arr = this;
    const n = arr.length;
    const cmp =
      compareFn ||
      function (a, b) {
        return a.toString() > b.toString()
          ? 1
          : a.toString() < b.toString()
            ? -1
            : 0;
      };

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - 1 - i; j++) {
        if (cmp(arr[j], arr[j + 1]) > 0) {
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
