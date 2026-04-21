'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    if (this.length <= 1) {
      return this;
    }

    const swap = (arr, i, j) => {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    };

    const partition = (arr, low, high) => {
      const pivot = arr[high];
      let i = low - 1;

      for (let j = low; j <= high - 1; j++) {
        if (compareFunction) {
          if (compareFunction(arr[j], pivot) < 0) {
            i++;
            swap(arr, i, j);
          }
        } else {
          if (String(arr[j]) < String(pivot)) {
            i++;
            swap(arr, i, j);
          }
        }
      }
      swap(arr, i + 1, high);

      return i + 1;
    };

    const quickSort = (arr, low, high) => {
      if (low < high) {
        const pi = partition(arr, low, high);

        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
      }
    };

    quickSort(this, 0, this.length - 1);

    return this;
  };
}

module.exports = applyCustomSort;
