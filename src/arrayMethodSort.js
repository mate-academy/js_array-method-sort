'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const defaultCompare = (a, b) => {
      if (a === undefined || a === null) {
        return 1;
      }

      if (b === undefined || b === null) {
        return -1;
      }

      const strA = String(a);
      const strB = String(b);

      if (strA < strB) {
        return -1;
      }

      if (strA > strB) {
        return 1;
      }

      return 0;
    };

    const compare = compareFunction || defaultCompare;

    const quicksort = (array, left = 0, right = array.length - 1) => {
      if (left < right) {
        const pivotIndex = partition(array, left, right);

        quicksort(array, left, pivotIndex - 1);
        quicksort(array, pivotIndex, right);
      }
    };

    const partition = (array, left, right) => {
      const pivot = array[Math.floor((left + right) / 2)];
      let i = left;
      let j = right;

      while (i <= j) {
        while (compare(array[i], pivot) < 0) {
          i++;
        }

        while (compare(array[j], pivot) > 0) {
          j--;
        }

        if (i <= j) {
          [array[i], array[j]] = [array[j], array[i]];
          i++;
          j--;
        }
      }

      return i;
    };

    quicksort(this);

    return this;
  };
}

module.exports = applyCustomSort;
