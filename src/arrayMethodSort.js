'use strict';

/**
 * Implement method Sort
 */
const defaultCompare = (a, b) => a.toString() > b.toString();

function applyCustomSort() {
  [].__proto__.sort2 = function (
    compareFunction = defaultCompare) {
    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - 1 - i; j++) {
        const nextIndex = j + 1;

        if (compareFunction(this[j], this[nextIndex]) > 0) {
          [this[j], this[nextIndex]] = [this[nextIndex], this[j]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
