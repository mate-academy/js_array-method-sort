'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    if (
      compareFunction !== undefined &&
      typeof compareFunction !== 'function'
    ) {
      throw new TypeError(
        'The comparison function must be either a function or undefined',
      );
    }

    const comparator =
      compareFunction ||
      function (a, b) {
        const aU = a === undefined;
        const bU = b === undefined;

        if (aU && bU) {
          return 0;
        }

        if (aU) {
          return 1;
        }

        if (bU) {
          return -1;
        }

        const sa = String(a);
        const sb = String(b);

        if (sa < sb) {
          return -1;
        }

        if (sa > sb) {
          return 1;
        }

        return 0;
      };

    const arr = this;
    const n = arr.length;

    let swapped;

    do {
      swapped = false;

      for (let i = 1; i < n; i++) {
        if (comparator(arr[i - 1], arr[i]) > 0) {
          const tmp = arr[i - 1];

          arr[i - 1] = arr[i];
          arr[i] = tmp;
          swapped = true;
        }
      }
    } while (swapped);

    return arr;
  };
}

module.exports = applyCustomSort;
