'use strict';

/**
 * Implement method Sort
 */

function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const array = this;

    const compare =
      compareFunction ||
      function (a, b) {
        const strA = String(a);
        const strB = String(b);

        return strA > strB ? 1 : strA < strB ? -1 : 0;
      };

    for (let i = 0; i < array.length - 1; i++) {
      for (let j = 0; j < array.length - 1 - i; j++) {
        if (compare(array[j], array[j + 1]) > 0) {
          const temp = array[j];

          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }

    return array;
  };
}

module.exports = applyCustomSort;
