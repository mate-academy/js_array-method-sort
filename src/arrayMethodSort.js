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

    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (comparator(arr[i], arr[j]) > 0) {
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
      }
    }

    return arr;
  };
}

module.exports = applyCustomSort;
