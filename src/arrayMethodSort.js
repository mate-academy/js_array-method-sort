'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction
  = (a, b) => String(a) > String(b)) {
    const array = this;
    const n = array.length;

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        const compareResult = compareFunction(this[j], this[j + 1]);

        if (compareResult > 0) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
        }
      }
    }

    return array;
  };
}

module.exports = applyCustomSort;
