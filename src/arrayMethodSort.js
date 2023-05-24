'use strict';

/**
 * Implement method Sort
 */

function applyCustomSort() {
  // quick sort implementanion
  [].__proto__.sort2 = function(comparator = (a, b) => String(a) > String(b)) {
    const partition = (arr, left, right) => {
      const pivot = arr[Math.floor((right + left) / 2)];
      let i = left;
      let j = right;

      while (i <= j) {
        while (comparator(arr[i], pivot) < 0) {
          i++;
        }

        while (comparator(arr[j], pivot) > 0) {
          j--;
        }

        if (i <= j) {
          [arr[i], arr[j]] = [arr[j], arr[i]];
          i++;
          j--;
        }
      }

      return i;
    };

    const quickSortRecursive = (arr, left, right) => {
      if (left < right) {
        const partitionIndex = partition(arr, left, right);

        quickSortRecursive(arr, left, partitionIndex - 1);
        quickSortRecursive(arr, partitionIndex, right);
      }
    };

    quickSortRecursive(this, 0, this.length - 1);

    return this;
  };

  // bubble sort  implementanion
  [].__proto__.sort3 = function(comparator = (a, b) => String(a) > String(b)) {
    let isSwapped;

    do {
      isSwapped = false;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const current = this[i];

        if (comparator(prev, current) > 0) {
          [this[i - 1], this[i]] = [this[i], this[i - 1]];
          isSwapped = true;
        }
      }
    } while (isSwapped);

    return this;
  };
}

module.exports = applyCustomSort;
