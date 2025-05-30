'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const arr = this;
    const compare =
      compareFunction ||
      ((a, b) => {
        const aStr = String(a);
        const bStr = String(b);

        if (aStr > bStr) {
          return 1;
        } else if (aStr < bStr) {
          return -1;
        }

        return 0;
      });

    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (compare(arr[j], arr[j + 1]) > 0) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }

    return arr;
  };
}

module.exports = applyCustomSort;
