'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const defaultCompareFunction = (a, b) => {
      const aStr = a.toString();
      const bStr = b.toString();

      if (aStr < bStr) {
        return -1;
      } else if (aStr > bStr) {
        return 1;
      } else {
        return 0;
      }
    };

    let effectiveCompareFunction;

    if (typeof compareFunction === 'function') {
      effectiveCompareFunction = compareFunction;
    } else {
      effectiveCompareFunction = defaultCompareFunction;
    }

    for (let i = 1; i < this.length; i++) {
      const key = this[i];
      let j;

      for (
        j = i - 1;
        j >= 0 && effectiveCompareFunction(this[j], key) > 0;
        j--
      ) {
        this[j + 1] = this[j];
      }

      this[j + 1] = key;
    }

    return this;
  };
}

module.exports = applyCustomSort;
