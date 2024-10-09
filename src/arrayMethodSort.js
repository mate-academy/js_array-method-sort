'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  // Define the custom sort2 method on the Array prototype
  [].__proto__.sort2 = function (compareFunction) {
    const arr = this;
    const len = arr.length;

    const defaultCompare = (a, b) => {
      const aStr = String(a);
      const bStr = String(b);

      if (aStr < bStr) {
        return -1;
      }

      if (aStr > bStr) {
        return 1;
      }

      return 0;
    };

    const compare =
      typeof compareFunction === 'function' ? compareFunction : defaultCompare;

    /**
     * In-place Quicksort implementation
     * @param {number} start
     * @param {number} end
     */
    function quickSort(start, end) {
      if (start >= end) {
        return;
      }

      const pivot = arr[end];
      let i = start;

      for (let j = start; j < end; j++) {
        if (compare(arr[j], pivot) < 0) {
          [arr[i], arr[j]] = [arr[j], arr[i]];
          i++;
        }
      }

      [arr[i], arr[end]] = [arr[end], arr[i]];

      quickSort(start, i - 1);
      quickSort(i + 1, end);
    }

    quickSort(0, len - 1);

    return arr;
  };
}

module.exports = applyCustomSort;
