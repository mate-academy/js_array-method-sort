'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const arr = this;
    const length = arr.length;

    // Default compare function (like native sort)
    const defaultCompare = (a, b) => {
      const aStr = String(a);
      const bStr = String(b);

      return aStr > bStr ? 1 : aStr < bStr ? -1 : 0;
    };

    const compare =
      typeof compareFunction === 'function' ? compareFunction : defaultCompare;

    // Bubble sort
    for (let i = 0; i < length - 1; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (compare(arr[j], arr[j + 1]) > 0) {
          // Swap
          const temp = arr[j];

          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }

    return arr;
  };
}

module.exports = applyCustomSort;
