'use strict';

/**
 * Implement method Sort
 */

function compareElem(a, b) {
  return a.toString() > b.toString() ? 1 : -1;
}

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const sort
      = compareFunction !== undefined ? compareFunction : compareElem;

    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - 1 - i; j++) {
        if (sort(this[j], this[j + 1]) > 0) {
          const swap = this[j];
          this[j] = this[j + 1];
          this[j + 1] = swap;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
