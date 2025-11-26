'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  /* eslint-disable-next-line no-extend-native */
  Array.prototype.sort2 = function (compareFunction) {
    const arr = this;

    let compare;

    if (typeof compareFunction === 'function') {
      compare = compareFunction;
    } else {
      compare = (a, b) => {
        const A = String(a);
        const B = String(b);

        if (A < B) {
          return -1;
        }

        if (A > B) {
          return 1;
        }

        return 0;
      };
    }

    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - 1 - i; j++) {
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
