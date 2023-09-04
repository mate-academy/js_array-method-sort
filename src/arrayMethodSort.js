'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = undefined) {
    // Bubble Sort
    for (let i = 0; i < this.length - 1; ++i) {
      let swapped = false;

      for (let j = 0; j < this.length - i - 1; ++j) {
        // Convert values to strings by default
        let compareResult = String(this[j]) > String(this[j + 1]);

        if (compareFunction) {
          compareResult = compareFunction(this[j], this[j + 1]);
        }

        if (compareResult > 0) {
          const temp = this[j];

          this[j] = this[j + 1];
          this[j + 1] = temp;
          swapped = true;
        }
      }

      if (!swapped) {
        break;
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
