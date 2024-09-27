'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__
    .sort2 = function(compareFunction = (a, b) => String(a) > String(b)) {
      for (let i = 0; i < this.length - 1; i++) {
        for (let j = 0; j < this.length - 1 - i; j++) {
          if (compareFunction(this[j], this[j + 1]) > 0) {
            const buf = this[j];

            this[j] = this[j + 1];
            this[j + 1] = buf;
          }
        }
      }

      return this;
    };
}

module.exports = applyCustomSort;
