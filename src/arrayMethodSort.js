'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const defaultCompareFun = (a, b) => {
      const strA = String(a);
      const strB = String(b);

      return strA < strB ? -1 : strA > strB ? 1 : 0;
    };

    const compare =
      typeof compareFunction === 'function'
        ? compareFunction
        : defaultCompareFun;

    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - 1 - i; j++) {
        if (compare(this[j], this[j + 1]) > 0) {
          const temp = this[j];

          this[j] = this[j + 1];
          this[j + 1] = temp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
