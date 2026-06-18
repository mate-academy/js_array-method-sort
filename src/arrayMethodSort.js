'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const arr = this;
    const len = arr.length;

    for (let i = 0; i < len - 1; i++) {
      for (let j = 0; j < len - 1 - i; j++) {
        const a = arr[j];
        const b = arr[j + 1];
        let cmp;

        if (typeof compareFunction === 'function') {
          cmp = compareFunction(a, b);
        } else {
          cmp = String(a) > String(b) ? 1 : String(a) < String(b) ? -1 : 0;
        }

        if (cmp > 0) {
          const temp = arr[j];

          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }

    return arr;
  };

  return this;
}

module.exports = applyCustomSort;
