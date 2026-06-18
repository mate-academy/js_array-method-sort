'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const array = this;
    const length = array.length;

    const compare =
      compareFunction ||
      function (a, b) {
        const sA = String(a);
        const sB = String(b);

        if (sA > sB) {
          return 1;
        }

        if (sA < sB) {
          return -1;
        }

        return 0;
      };

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - 1 - i; j++) {
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
