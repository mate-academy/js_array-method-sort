'use strict';

/**
 * Implement method Sort
 */
/* eslint-disable no-extend-native */
function applyCustomSort() {
  Array.prototype.sort2 = function (compareFunction) {
    // domyślny comparator
    function defaultComparator(a, b) {
      if (a === undefined && b === undefined) {
        return 0;
      }

      if (a === undefined) {
        return 1;
      }

      if (b === undefined) {
        return -1;
      }

      const A = String(a);
      const B = String(b);

      if (A > B) {
        return 1;
      }

      if (A < B) {
        return -1;
      }

      return 0;
    }

    const compare =
      typeof compareFunction === 'function'
        ? compareFunction
        : defaultComparator;

    const arr = this;
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (compare(arr[j], arr[j + 1]) > 0) {
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
