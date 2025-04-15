'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  // Define sort2 first
  [].__proto__.sort2 = function (compareFunction) {
    const defaultCompare = (a, b) => {
      const aStr = String(a);
      const bStr = String(b);

      if (aStr < bStr) {
        return -1;
      } else if (aStr > bStr) {
        return 1;
      }

      return 0;
    };

    const comparator = compareFunction || defaultCompare;
    const arr = this;
    const len = arr.length;

    for (let i = 1; i < len; i++) {
      const current = arr[i];
      let j = i - 1;

      while (j >= 0 && comparator(arr[j], current) > 0) {
        arr[j + 1] = arr[j];
        j--;
      }

      arr[j + 1] = current;
    }

    return arr;
  };

  // Replace the original sort with your custom implementation
  [].__proto__.sort = [].__proto__.sort2;
}

module.exports = applyCustomSort;
