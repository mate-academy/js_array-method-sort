'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const arr = this;

    if (typeof compareFunction !== 'function') {
      // eslint-disable-next-line no-param-reassign
      compareFunction = (a, b) => {
        // eslint-disable-next-line no-param-reassign
        a = String(a);
        // eslint-disable-next-line no-param-reassign
        b = String(b);

        return a > b ? 1 : a < b ? -1 : 0;
      };
    }

    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (compareFunction(arr[j], arr[j + 1]) > 0) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }

    return arr;
  };
}

module.exports = applyCustomSort;
