'use strict';

function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    if (this.length < 2) {
      return this;
    }

    const compare = compareFunction || ((a, b) => String(a).localeCompare(String(b)));

    const partition = (arr, low, high) => {
      const pivot = arr[high];
      let i = low - 1;

      for (let j = low; j < high; j++) {
        if (compare(arr[j], pivot) < 0) {
          i++;
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
      }

      [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
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
