'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let swapCount = 1;

    while (swapCount > 0) {
      swapCount = 0;

      for (let i = 1; i < this.length; i++) {
        let temp;

        if (compareFunction(this[i - 1], this[i]) > 0) {
          swapCount++;
          temp = this[i - 1];
          this[i - 1] = this[i];
          this[i] = temp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
