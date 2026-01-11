'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    let compare = compareFunction;

    if (typeof compare !== 'function') {
      compare = (a, b) => {
        const A = String(a);
        const B = String(b);

        if (A > B) {
          return 1;
        }

        if (A < B) {
          return -1;
        }

        return 0;
      };
    }

    const arr = this;
    const length = arr.length;

    for (let i = 0; i < length - 1; i++) {
      for (let j = 0; j < length - 1 - i; j++) {
        if (compare(arr[j], arr[j + 1]) > 0) {
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
