'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const arr = this;
    const n = arr.length;

    const defaultCompare = (a, b) => {
      const strA = String(a);
      const strB = String(b);

      if (strA < strB) {
        return -1;
      }

      if (strA > strB) {
        return 1;
      }

      return 0;
    };

    const actualCompare =
      typeof compareFunction === 'function' ? compareFunction : defaultCompare;

    for (let i = 0; i < n - 1; i++) {
      let swapped = false;

      for (let j = 0; j < n - 1 - i; j++) {
        if (actualCompare(arr[j], arr[j + 1]) > 0) {
          const temp = arr[j];

          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          swapped = true;
        }
      }

      if (!swapped) {
        break;
      }
    }

    return this;
  };
}
module.exports = applyCustomSort;
