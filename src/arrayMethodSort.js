'use strict';

/**
 * Implement method Sort
 */

const applyCustomSort = () => {
  [].__proto__.sort2 = function (compareFunction) {
    const defaultCompareFunction = (a, b) => {
      if (String(a) < String(b)) {
        return -1;
      }

      if (String(a) > String(b)) {
        return 1;
      }

      return 0;
    };

    const compare = compareFunction || defaultCompareFunction;

    for (let i = 0; i < this.length - 1; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (compare(this[i], this[j]) > 0) {
          [this[i], this[j]] = [this[j], this[i]];
        }
      }
    }

    return this;
  };
};

module.exports = applyCustomSort;
