'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    if (this == null) {
      throw new TypeError('Cannot convert undefined or null to object');
    }

    const arr = Object(this);
    const length = Number(arr.length) >>> 0;

    if (
      compareFunction !== undefined &&
      typeof compareFunction !== 'function'
    ) {
      throw new TypeError(
        'The comparison function must be either a function or undefined',
      );
    }

    const compare =
      compareFunction ||
      ((a, b) => {
        const strA = String(a);
        const strB = String(b);

        if (strA > strB) {
          return 1;
        }

        if (strA < strB) {
          return -1;
        }

        return 0;
      });

    for (let i = 0; i < length - 1; i++) {
      for (let j = 0; j < length - 1 - i; j++) {
        if (compare(arr[j], arr[j + 1]) > 0) {
          // міняємо місцями
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
