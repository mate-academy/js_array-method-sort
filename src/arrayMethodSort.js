'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  function defaultCompare(a, b) {
    const start = a.toString();
    const end = b.toString();

    if (start < end) {
      return -1;
    }

    if (start > end) {
      return 1;
    }

    return 0;
  }

  [].__proto__.sort2 = function (compareFunction = defaultCompare) {
    if (this.length === 0) {
      return this;
    }

    const compare = compareFunction;

    const quickSort = (arr) => {
      if (arr.length <= 1) {
        return arr;
      }

      const pivot = arr[Math.floor(arr.length / 2)];
      const left = [];
      const right = [];

      for (let i = 0; i < arr.length; i++) {
        if (i === Math.floor(arr.length / 2)) {
          continue;
        }

        if (compare(arr[i], pivot) < 0) {
          left.push(arr[i]);
        } else {
          right.push(arr[i]);
        }
      }

      return [...quickSort(left), pivot, ...quickSort(right)];
    };

    const sortedArray = quickSort([...this]);

    for (let i = 0; i < this.length; i++) {
      this[i] = sortedArray[i];
    }

    return this;
  };
}

module.exports = applyCustomSort;
