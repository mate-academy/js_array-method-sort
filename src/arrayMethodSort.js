'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const defaultCompare = (a, b) => (String(a) < String(b) ? -1 : 1);
    const compare = compareFunction || defaultCompare;

    for (let i = 1; i < this.length; i++) {
      for (let j = 0; j < i; j++) {
        if (compare(this[i], this[j]) < 0) {
          [this[i], this[j]] = [this[j], this[i]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
