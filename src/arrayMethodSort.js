'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const defaultCompareFunction = (a, b) => {
    const x = String(a);
    const y = String(b);

    if (x > y) {
      return 1;
    }

    if (x < y) {
      return -1;
    }

    return 0;
  };

  [].__proto__.sort2 = function (compareFunction) {
    const arr = this;

    const compareFn =
      typeof compareFunction === 'function'
        ? compareFunction
        : defaultCompareFunction;

    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - 1 - i; j++) {
        if (compareFn(arr[j], arr[j + 1]) > 0) {
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
