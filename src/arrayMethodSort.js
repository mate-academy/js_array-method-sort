'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const length = this.length;

    let comparator;

    if (typeof compareFunction !== 'function') {
      comparator = function (a, b) {
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
    } else {
      comparator = compareFunction;
    }

    function quickSort(arr, left, right) {
      if (left < right) {
        const pivotIndex = partition(arr, left, right);

        quickSort(arr, left, pivotIndex - 1);

        quickSort(arr, pivotIndex + 1, right);
      }
    }

    function partition(arr, left, right) {
      const pivot = arr[right];
      let i = left - 1;

      for (let j = left; j < right; j++) {
        if (comparator(arr[j], pivot) <= 0) {
          i++;
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
      }

      [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];

      return i + 1;
    }

    quickSort(this, 0, length - 1);

    return this;
  };
}

module.exports = applyCustomSort;
