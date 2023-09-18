'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = (a, b) =>
    String(a) > String(b)) {
    const array = this;

    for (let i = 0; i < array.length - 1; i++) {
      for (let j = 0; j < array.length - i - 1; j++) {
        const a = array[j];
        const b = array[j + 1];
        const compareValue = compareFunction(a, b);

        if (compareValue > 0) {
          array[j] = b;
          array[j + 1] = a;
        }
      }
    }

    return array;
  };
}

module.exports = applyCustomSort;
