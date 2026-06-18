'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    if (
      compareFunction !== undefined &&
      typeof compareFunction !== 'function'
    ) {
      throw new TypeError('The comparison function must be a function');
    }

    const cmp =
      compareFunction ||
      ((a, b) => {
        if (a === undefined && b !== undefined) {
          return 1;
        }

        if (a !== undefined && b === undefined) {
          return -1;
        }

        const strA = String(a);
        const strB = String(b);

        return strA > strB ? 1 : strA < strB ? -1 : 0;
      });

    if (this.length < 2) {
      return this;
    }

    for (let j = 0; j < this.length; j++) {
      for (let i = 0; i < this.length - 1; i++) {
        if (cmp(this[i], this[i + 1]) > 0) {
          [this[i], this[i + 1]] = [this[i + 1], this[i]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
