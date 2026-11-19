'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const arr = this;
    const len = arr.length;

    const compare =
      compareFunction ||
      function (a, b) {
        const strA = String(a);
        const strB = String(b);

        if (strA < strB) {
          return -1;
        }

        if (strA > strB) {
          return 1;
        }

        return 0;
      };

    for (let i = 1; i < len; i++) {
      let j = i;

      while (j > 0 && compare(arr[j - 1], arr[j]) > 0) {
        const temp = arr[j];

        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
        j--;
      }
    }

    return arr;
  };
}

module.exports = applyCustomSort;
