'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const comparator =
      typeof compareFunction === 'function'
        ? compareFunction
        : (a, b) => (String(a) > String(b) ? 1 : -1);

    for (let i = 0; i < this.length; i++) {
      for (let y = 0; y < this.length - 1 - i; y++) {
        if (comparator(this[y], this[y + 1]) > 0) {
          const temp = this[y];

          this[y] = this[y + 1];
          this[y + 1] = temp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;


