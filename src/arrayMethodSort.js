'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - 1; j++) {
        if (this[j] > this[j + 1]) {
          const swap = this[j];

          this[j] = this[j + 1];
          this[j + 1] = swap;
        }
      }
    }

    return this;
  };
}
module.exports = applyCustomSort;
