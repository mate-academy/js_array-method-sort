'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    if (!compareFunction) {
      const n = this.length;
      let swapped;

      do {
        swapped = false;

        for (let i = 0; i < n - 1; i++) {
          if (String(this[i]) > String(this[i + 1])) {
            [this[i], this[i + 1]] = [this[i + 1], this[i]];
            swapped = true;
          }
        }
      } while (swapped);
    } else {
      const quicksort = (arr, left, right) => {
        if (left < right) {
          const pivotIndex = partition(arr, left, right);

          quicksort(arr, left, pivotIndex - 1);
          quicksort(arr, pivotIndex + 1, right);
        }
      };

      const partition = (arr, left, right) => {
        const pivotValue = arr[right];
        let i = left - 1;

        for (let j = left; j < right; j++) {
          if (compareFunction(arr[j], pivotValue) <= 0) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
          }
        }

        [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];

        return i + 1;
      };

      quicksort(this, 0, this.length - 1);
    }

    return this;
  };
}

module.exports = applyCustomSort;
