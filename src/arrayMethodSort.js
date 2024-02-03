'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - 1 - i; j++) {
        if (compareFunction ? compareFunction(this[j], this[j + 1])
          > 0 : String(this[j]) > String(this[j + 1])) {
          const TEMP = this[j];

          this[j] = this[j + 1];
          this[j + 1] = TEMP;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
