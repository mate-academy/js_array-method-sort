'use strict';

/**
 * Implement method Sort
 */

function compareString(a, b) {
  const firstString = String(a);
  const secondString = String(b);

  if (firstString > secondString) {
    return 1;
  }

  if (firstString === secondString) {
    return 0;
  }

  return -1;
}

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareString) {
    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (compareFunction(this[i], this[j]) > 0) {
          const swap = this[i];

          this[i] = this[j];
          this[j] = swap;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
