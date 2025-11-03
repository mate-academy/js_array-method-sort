'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const arr = this;

    let cmp;

    if (typeof compareFunction === 'function') {
      cmp = compareFunction;
    } else {
      cmp = function (a, b) {
        const A = String(a);
        const B = String(b);

        if (A < B) {
          return -1;
        }

        if (A > B) {
          return 1;
        }

        return 0;
      };
    }

    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (cmp(arr[j], arr[j + 1]) > 0) {
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
