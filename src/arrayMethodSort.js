'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const arr = this;

    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        let result;

        if (typeof compareFunction === 'function') {
          result = compareFunction(arr[j], arr[j + 1]);
        } else {
          const a = String(arr[j]);
          const b = String(arr[j + 1]);

          result = a > b ? 1 : a < b ? -1 : 0;
        }

        if (result > 0) {
          const temp = arr[j];

          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }

    return this;
  };
}
module.exports = applyCustomSort;
