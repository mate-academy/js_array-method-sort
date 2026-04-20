'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const arr = this;
    const len = arr.length;

    if (
      compareFunction !== undefined &&
      typeof compareFunction !== 'function'
    ) {
      throw new TypeError('The comparison function must be a function');
    }

    const defaultCompare = (a, b) => {
      const aStr = String(a);
      const bStr = String(b);

      return aStr > bStr ? 1 : aStr < bStr ? -1 : 0;
    };
    const compare =
      typeof compareFunction === 'function' ? compareFunction : defaultCompare;

    for (let i = 0; i < len - 1; i++) {
      for (let j = 0; j < len - 1 - i; j++) {
        if (compare(arr[j], arr[j + 1]) > 0) {
          const temp = arr[j];

          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }

    return arr;
  };

  [].__proto__.sort = function (compareFunction) {
    return this.sort2(compareFunction);
  };
}

module.exports = applyCustomSort;
