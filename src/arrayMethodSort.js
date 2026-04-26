'use strict';

/**
 * Implement method Sort
 */

applyCustomSort();

function applyCustomSort(callback) {
  [].__proto__.sort2 = function(compareFunction) {
    if (typeof compareFunction !== 'function') {
      compareFunction = function(a, b) {

        return String(a) > String(b) ? 1 : (String(a) < String(b) ? -1 : 0);
      };
    }

    const arr = this;
    const length = arr.length;

    for (let i = 0; i < length - 1; i++) {
      for (let j = 0; j < length - 1 - i; j++) {
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
