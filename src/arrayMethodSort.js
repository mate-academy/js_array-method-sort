'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    // write code here
    const arr = this;
    const n = arr.length;

    let compare;

    if (typeof compareFunction === 'function') {
      compare = compareFunction;
    } else {
      compare = (a, b) => {
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
    }

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - 1 - i; j++) {
        if (compare(arr[j], arr[j + 1]) > 0) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }

    return arr;
  };
}

module.exports = applyCustomSort;
