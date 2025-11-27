'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const arr = this; // the array calling sort2

    // If no compareFunction is provided, compare as strings
    const cmp =
      compareFunction ||
      function (a, b) {
        const aStr = String(a);
        const bStr = String(b);

        if (aStr < bStr) {
          return -1;
        }

        if (aStr > bStr) {
          return 1;
        }

        return 0;
      };

    // Simple bubble sort
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - 1 - i; j++) {
        if (cmp(arr[j], arr[j + 1]) > 0) {
          // Swap elements
          const temp = arr[j];

          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }

    return arr; // Return sorted array
  };
}

module.exports = applyCustomSort;
