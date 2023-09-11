'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = (
    a, b) => String(a) > String(b)
  ) {
    if (compareFunction !== undefined) {
      for (let i = 0; i < this.length - 1; i++) {
        for (let x = 0; x < this.length - i - 1; x++) {
          if (compareFunction(this[x], this[x + 1]) > 0) {
            const temp = this[x];

            this[x] = this[x + 1];
            this[x + 1] = temp;
          }
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
