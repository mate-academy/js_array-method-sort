'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const arr = this;

    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        const a = arr[i];
        const b = arr[j];

        let comparison = 0;

        if (typeof compareFunction === 'function') {
          comparison = compareFunction(a, b);
        } else {
          comparison = String(a) > String(b) ? 1 : -1;
        }

        if (comparison > 0) {
          const temp = arr[i];

          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }

    return arr;
  };
}

module.exports = applyCustomSort;
