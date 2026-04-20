'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const length = this.length;
    const defaultCompare = (a, b) => {
      if (String(a) > String(b)) {
        return 1;
      }

      if (String(a) < String(b)) {
        return -1;
      }

      return 0;
    };
    const compare =
      typeof compareFunction === 'function' ? compareFunction : defaultCompare;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - 1; j++) {
        if (compare(this[j], this[j + 1]) > 0) {
          // Swap elements
          [this[j], this[j + 1]] = [this[j + 1], this[j]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
