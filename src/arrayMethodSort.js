'use strict';

function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction = ((a, b) => (String(a) > String(b) ? 1 : -1))) {
    if (this.length < 2) {
      return this;
    }

    const quickSort = (arr, left = 0, right = arr.length - 1) => {
      if (left >= right) {
        return;
      }

      const pivotIndex = partition(arr, left, right);

      quickSort(arr, left, pivotIndex - 1);
      quickSort(arr, pivotIndex + 1, right);
    };

    const partition = (arr, left, right) => {
      const pivot = arr[right];
      let i = left - 1;

      for (let j = left; j < right; j++) {
        if (compareFunction(arr[j], pivot) < 0) {
          i++;
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
      }

      [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];

      return i + 1;
    };

    quickSort(this);

    return this;
  };
}

module.exports = applyCustomSort;
