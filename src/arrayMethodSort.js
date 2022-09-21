'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = ((a, b) => (
    a.toString() > b.toString()
  ))) {
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
