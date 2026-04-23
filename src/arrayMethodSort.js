'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const defaultCompareFunction = (a, b) => {
      const strA = String(a);
      const strB = String(b);

      return strA < strB ? -1 : strA > strB ? 1 : 0;
    };

    const actualCompareFunction =
      typeof compareFunction === 'function'
        ? compareFunction
        : defaultCompareFunction;

    const quicksort = (arr, left, right) => {
      if (left < right) {
        const pivotIndex = partition(arr, left, right);

        quicksort(arr, left, pivotIndex - 1);
        quicksort(arr, pivotIndex + 1, right);
      }
    };

    const partition = (arr, left, right) => {
      const pivot = arr[right];
      let i = left - 1;

      for (let j = left; j < right; j++) {
        if (actualCompareFunction(arr[j], pivot) < 0) {
          i++;
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
      }
      [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];

      return i + 1;
    };

    quicksort(this, 0, this.length - 1);

    return this;
  };
}

module.exports = applyCustomSort;
