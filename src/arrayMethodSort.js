'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  // write code here
  [].__proto__.sort2
    = function(compareFunction = (a, b) => String(a) > String(b)) {
      for (let i = 0; i < this.length; i++) {
        for (let k = i + 1; k < this.length; k++) {
          if (compareFunction(this[i], this[k]) > 0) {
            const compare = this[i];

            this[i] = this[k];
            this[k] = compare;
          }
        }
      }

      return this;
    };
}

module.exports = applyCustomSort;
