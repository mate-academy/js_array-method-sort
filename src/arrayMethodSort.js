'use strict';

/**
 * Implement method Sort
 */

function compareFn(a, b) {
  if (a.toString() < b.toString()) {
    return -1;
  }

  if (a.toString() > b.toString()) {
    return 1;
  }

  return 0;
}

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareFn) {
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
