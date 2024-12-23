'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const compare =
      compareFunction ||
      ((a, b) => {
        return String(a) === String(b) ? 0 : String(a) > String(b) ? 1 : -1;
      });

    const quickSort = (arr, left, right) => {
      if (left >= right) {
        return;
      }

      const pivotIndex = Math.floor((left + right) / 2);
      const pivot = arr[pivotIndex];

      let i = left;
      let j = right;

      while (i <= j) {
        while (compare(arr[i], pivot) < 0) {
          i++;
        }

        while (compare(arr[j], pivot) > 0) {
          j--;
        }

        if (i <= j) {
          const temp = arr[i];

          arr[i] = arr[j];
          arr[j] = temp;
          i++;
          j--;
        }
      }

      quickSort(arr, left, j);
      quickSort(arr, i, right);
    };

    quickSort(this, 0, this.length - 1);

    return this;
  };
}

module.exports = applyCustomSort;
