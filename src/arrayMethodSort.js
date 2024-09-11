'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    let comparator;

    if (typeof compareFunction === 'function') {
      comparator = compareFunction;
    } else {
      comparator = (a, b) => {
        const aStr = String(a);
        const bStr = String(b);

        if (aStr < bStr) {
          return -1;
        }

        if (aStr > bStr) {
          return 1;
        }

        return 0;
      };
    }

    const arr = this;
    let len = arr.length;
    let swapped;

    do {
      swapped = false;

      for (let i = 0; i < len - 1; i++) {
        if (comparator(arr[i], arr[i + 1]) > 0) {
          const temp = arr[i];

          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;
        }
      }
      len--;
    } while (swapped);

    return arr;
  };
}

module.exports = applyCustomSort;
