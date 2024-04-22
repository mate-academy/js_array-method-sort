'use strict';

/**
 * Implement method Sort
 */
'use strict';

function applyCustomSort() {
  function quicksort(arr, compareFunction, start = 0, end = arr.length - 1) {
    if (start >= end) {
      return;
    }

    const pivotIndex = partition(arr, compareFunction, start, end);

    quicksort(arr, compareFunction, start, pivotIndex - 1);
    quicksort(arr, compareFunction, pivotIndex + 1, end);
  }

  function partition(arr, compareFunction, start, end) {
    const pivot = arr[end];
    let pivotIndex = start;

    for (let i = start; i < end; i++) {
      if (compareFunction(arr[i], pivot) < 0) {
        [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        pivotIndex++;
      }
    }

    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];

    return pivotIndex;
  }

  [].__proto__.sort2 = function (
    compareFunction = (a, b) => {
      if (String(a) < String(b)) {
        return -1;
      }

      if (String(a) > String(b)) {
        return 1;
      }

      return 0;
    },
  ) {
    quicksort(this, compareFunction);

    return this;
  };
}

module.exports = applyCustomSort;
