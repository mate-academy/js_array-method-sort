'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const defaultCompareFunction = (a, b) => {
      const firstElement = String(a);
      const secondElement = String(b);

      if (firstElement > secondElement) {
        return 1;
      } else if (firstElement < secondElement) {
        return -1;
      }

      return 0;
    };

    function quickSort(arr, compare) {
      if (arr.length <= 1) {
        return arr;
      }

      const pivot = arr[arr.length - 1];
      const left = [];
      const right = [];

      for (let i = 0; i < arr.length - 1; i++) {
        if (compareFunc(arr[i], pivot) < 0) {
          left.push(arr[i]);
        } else {
          right.push(arr[i]);
        }
      }

      return [...quickSort(left, compare), pivot, ...quickSort(right, compare)];
    }

    const compareFunc = compareFunction || defaultCompareFunction;
    const sortedArray = quickSort(this, compareFunc);

    for (let i = 0; i < sortedArray.length; i++) {
      if (this[i] !== sortedArray[i]) {
        this[i] = sortedArray[i];
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
