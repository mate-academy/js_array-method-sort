'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const compare =
      typeof compareFunction === 'function'
        ? compareFunction
        : (a, b) => {
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

    const arr = this;
    const len = arr.length;

    for (let i = 0; i < len - 1; i++) {
      for (let j = 0; j < len - i - 1; j++) {
        if (compare(arr[j], arr[j + 1]) > 0) {
          // Swap elements if they are in the wrong order
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }

    return arr;
  };
}

module.exports = applyCustomSort;
