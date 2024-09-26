'use strict';

/**
 * Implement method Sort
 */

function applyCustomSort() {
  const customerCompare = (a, b) => (a.toString() > b.toString() ? 1 : -1);

  [].__proto__.sort2 = function (compareFunction = customerCompare) {
    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (compareFunction(this[i], this[j]) > 0) {
          [this[i], this[j]] = [this[j], this[i]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
