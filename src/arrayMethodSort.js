'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = (a, b) => a > b ? 0 : -1) {
    for (let i = 0; i < this.length - 1; i++) {
      const a = this[i];
      const b = this[i + 1];

      if (compareFunction(a + '', b + '') >= 0) {
        this[i] = b;
        this[i + 1] = a;
        i = -1;
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
