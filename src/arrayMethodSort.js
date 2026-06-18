'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const defaultFunc = (a, b) => {
      const strA = String(a);
      const strB = String(b);

      return strA < strB ? -1 : strA > strB ? 1 : 0;
    };

    const comparator =
      typeof compareFunction === 'function' ? compareFunction : defaultFunc;

    for (let i = 0; i < this.length - 1; i++) {
      for (let k = 0; k < this.length - 1 - i; k++) {
        if (comparator(this[k], this[k + 1]) > 0) {
          const temp = this[k];

          this[k] = this[k + 1];
          this[k + 1] = temp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
