'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const compareFunctionAlt = (a, b) => {
      const strA = String(a);
      const strB = String(b);

      return strA < strB ? -1 : strA > strB ? 1 : 0;
    };

    const comparator =
      typeof compareFunction === 'function'
        ? compareFunction
        : compareFunctionAlt;

    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - 1 - i; j++) {
        if (comparator(this[j], this[j + 1]) > 0) {
          [this[j], this[j + 1]] = [this[j + 1], this[j]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
