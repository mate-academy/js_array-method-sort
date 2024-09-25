'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    let sortingFunc;

    // Compare elements as strings if compareFunction is omitted
    if (compareFunction !== undefined) {
      sortingFunc = compareFunction;
    } else {
      sortingFunc = (a, b) => {
        if (String(a) === String(b)) {
          return 0;
        }

        if (String(a) > String(b)) {
          return 1;
        }

        return -1;
      };
    }

    function partition(arr, start, end) {
      // Take the last element as the pivot
      const pivotValue = arr[end];
      let leftIndex = start;

      for (let i = start; i < end; i++) {
        if (sortingFunc(arr[i], pivotValue) <= 0) {
          // Swap elements
          [arr[i], arr[leftIndex]] = [arr[leftIndex], arr[i]];

          // Move to next element
          leftIndex++;
        }
      }

      // Put the pivot value in the middle
      [arr[leftIndex], arr[end]] = [arr[end], arr[leftIndex]];

      return leftIndex;
    }

    function quickSort(arr, start, end) {
      // Base case or terminating case
      if (start >= end) {
        return;
      }

      // Returns pivotIndex
      const index = partition(arr, start, end);

      // Recursively apply the same logic to the left and right subarrays
      quickSort(arr, start, index - 1);
      quickSort(arr, index + 1, end);
    }

    quickSort(this, 0, this.length - 1);

    return this;
  };
}

module.exports = applyCustomSort;
