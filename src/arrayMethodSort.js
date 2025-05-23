'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const arr = this;
    let comparator;

    if (typeof compareFunction === 'function') {
      comparator = compareFunction;
    } else {
      comparator = function (a, b) {
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

    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - 1 - i; j++) {
        if (comparator(arr[j], arr[j + 1]) > 0) {
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
