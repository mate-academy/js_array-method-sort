'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const defaultCompare = (a, b) => {
      if (String(a) < String(b)) {
        return -1;
      }

      if (String(a) > String(b)) {
        return 1;
      }

      return 0;
    };

    const comparator = compareFunction || defaultCompare;

    const partition = (arr, low, high) => {
      const pivot = arr[high];
      let i = low - 1;

      for (let j = low; j < high; j++) {
        if (comparator(arr[j], pivot) < 0) {
          i++;
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
      }

      [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

      return i + 1;
    };

    const quicksort = (arr, low, high) => {
      if (low < high) {
        const pi = partition(arr, low, high);

        quicksort(arr, low, pi - 1);
        quicksort(arr, pi + 1, high);
      }
    };

    quicksort(this, 0, this.length - 1);

    return this;
  };
}

module.exports = applyCustomSort;
