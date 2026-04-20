'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const arr = this;

    const compareFunctionUsed =
      compareFunction ||
      function (a, b) {
        if (String(a) < String(b)) {
          return -1;
        }

        if (String(a) > String(b)) {
          return 1;
        }

        return 0;
      };

    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - 1 - i; j++) {
        if (compareFunctionUsed(arr[j], arr[j + 1]) > 0) {
          let temp = arr[j];

          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          temp = arr[j];
        }
      }
    }

    return arr;
  };
}

module.exports = applyCustomSort;
