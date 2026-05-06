'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    // write code here
    const arr = this;

    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (compareFunction) {
          if (compareFunction(arr[i], arr[j]) > 0) {
            const temp = arr[i];

            arr[i] = arr[j];
            arr[j] = temp;
          }
        } else {
          const strA = String(arr[i]);
          const strB = String(arr[j]);

          if (strA > strB) {
            const temp = arr[i];

            arr[i] = arr[j];
            arr[j] = temp;
          }
        }
      }
    }

    return arr;
  };
}

module.exports = applyCustomSort;
