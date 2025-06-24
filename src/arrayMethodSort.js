/* eslint-disable no-param-reassign */
'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const arr = this;

    if (!compareFunction) {
      compareFunction = function (a, b) {
        const firstStr = String(a);
        const secondStr = String(b);

        if (firstStr > secondStr) {
          return 1;
        } else if (firstStr < secondStr) {
          return -1;
        } else {
          return 0;
        }
      };
    }

    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - 1 - i; j++) {
        if (compareFunction(arr[j], arr[j + 1]) > 0) {
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
