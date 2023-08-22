'use strict';

/**
 * Implement method Sort
 */

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = function(a, b) {
    if (b.toString() === a.toString()) {
      return 0;
    };

    return a.toString() > b.toString()
      ? 1
      : -1;
  }) {
    let swap = 0;

    for (let j = 0; j < this.length; j++) {
      for (let i = j + 1; i < this.length; i++) {
        if (compareFunction(this[j], this[i]) > 0) {
          swap = this[j];
          this[j] = this[i];
          this[i] = swap;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
