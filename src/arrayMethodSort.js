'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const arr = [...this];
    const len = arr.length;

    if (typeof compareFunction === 'function') {
      for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - i - 1; j++) {
          if (compareFunction(arr[j], arr[j + 1]) > 0) {
            const temp = arr[j];

            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
          }
        }
      }
    } else {
      for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - i - 1; j++) {
          if (String(arr[j]) > String(arr[j + 1])) {
            const temp = arr[j];

            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
          }
        }
      }
    }

    for (let i = 0; i < len; i++) {
      this[i] = arr[i];
    }

    return this;
  };
}

module.exports = applyCustomSort;
