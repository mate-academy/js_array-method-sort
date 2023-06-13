'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(
    compareFunction = function(a, b) {
      return String(a) < String(b) ? -1
        : (String(a) > String(b) ? 1 : 0);
    }
  ) {
    for (let n = 0; n < this.length; n++) {
      for (let i = 0; i < this.length - 1 - n; i++) {
        if (compareFunction(this[i], this[i + 1]) > 0) {
          [this[i], this[i + 1]] = [this[i + 1], this[i]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
