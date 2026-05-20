'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const arr = this;
    const compareFunction1 =
      compareFunction ||
      function (a, b) {
        const aStr = String(a);
        const bStr = String(b);

        const aIsUpper = /^[A-Z]/.test(aStr);
        const bIsUpper = /^[A-Z]/.test(bStr);

        if (aIsUpper && !bIsUpper) {
          return -1;
        }

        if (!aIsUpper && bIsUpper) {
          return 1;
        }

        return aStr.localeCompare(bStr);
      };

    function quickSort(array) {
      if (array.length <= 1) {
        return array;
      }

      const pivot = array[0];
      const left = [];
      const right = [];

      for (let i = 1; i < array.length; i++) {
        if (compareFunction1(array[i], pivot) <= 0) {
          left.push(array[i]);
        } else {
          right.push(array[i]);
        }
      }

      return [...quickSort(left), pivot, ...quickSort(right)];
    }

    const sorted = quickSort(arr.slice());

    for (let i = 0; i < arr.length; i++) {
      arr[i] = sorted[i];
    }

    return arr;
  };
}

module.exports = applyCustomSort;
