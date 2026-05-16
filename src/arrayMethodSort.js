'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const arr = this;

    let compare;

    if (typeof compareFunction === 'function') {
      compare = compareFunction;
    } else {
      compare = function (a, b) {
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
    }

    const length = arr.length;

    for (let i = 0; i < length - 1; i++) {
      for (let j = 0; j < length - 1 - i; j++) {
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
