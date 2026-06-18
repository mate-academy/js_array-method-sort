'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    // write code here
    const arr = this;
    const len = arr.length;

    const compare =
      compareFunction ||
      function (a, b) {
        let aValue = a;
        let bValue = b;

        aValue = String(a);
        bValue = String(b);

        if (aValue < bValue) {
          return -1;
        }

        if (aValue > bValue) {
          return 1;
        } else {
          return 0;
        }
      };

    for (let i = 0; i < len - 1; i++) {
      for (let j = 0; j < len - i - 1; j++) {
        if (compare(arr[j], arr[j + 1]) > 0) {
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
