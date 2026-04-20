'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    let compareFunc = compareFunction;

    if (typeof compareFunc !== 'function') {
      compareFunc = (a, b) => {
        const isALower = String(a).toLowerCase() === String(a);
        const isBLower = String(b).toLowerCase() === String(b);

        if (isALower && !isBLower) {
          return 1;
        }

        if (!isALower && isBLower) {
          return -1;
        }

        return String(a).localeCompare(String(b));
      };
    }

    const quickSort = (arr) => {
      if (arr.length <= 1) {
        return arr;
      }

      const lastElement = arr[arr.length - 1];
      const left = [];
      const right = [];

      for (let i = 0; i < arr.length - 1; i++) {
        if (compareFunc(arr[i], lastElement) <= 0) {
          left.push(arr[i]);
        } else {
          right.push(arr[i]);
        }
      }

      return [...quickSort(left), lastElement, ...quickSort(right)];
    };

    const sorted = quickSort([...this]);

    for (let i = 0; i < sorted.length; i++) {
      this[i] = sorted[i];
    }

    return this;
  };
}

module.exports = applyCustomSort;
