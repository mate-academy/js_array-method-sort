'use strict';

/**
 * Implement method Sort
 */

function applyCustomSort() {
  [].__proto__.sort2 = function (
    compareFunction = (a, b) => String(a) > String(b),
  ) {
    for (let i = 0; i < this.length - 1; i++) {
      for (let k = i + 1; k < this.length; k++) {
        if (compareFunction(this[i], this[k]) > 0) {
          [this[i], this[k]] = [this[k], this[i]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
