'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const arrayLength = this.length;

    for (let i = 0; i < arrayLength - 1; i++) {
      for (let j = 0; j < arrayLength - i - 1; j++) {
        let shouldSwap = false;

        if (compareFunction) {
          shouldSwap = compareFunction(this[j], this[j + 1]) > 0;
        } else {
          shouldSwap = String(this[j]) > String(this[j + 1]);
        }

        if (shouldSwap) {
          const temp = this[j];

          this[j] = this[j + 1];
          this[j + 1] = temp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
