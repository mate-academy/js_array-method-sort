'use strict';

/**
 * Implement method Sort
 */

function compareElem(a, b) {
  return a.toString() > b.toString() ? 1 : -1;
}

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const sort = compareFunction || compareElem;

    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - 1 - i; j++) {
        if (sort(this[j], this[j + 1]) > 0) {
          const cachedValue = this[j];
          this[j] = this[j + 1];
          this[j + 1] = cachedValue;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
