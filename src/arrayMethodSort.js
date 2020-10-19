'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    // write code here

    let count;

    let needToRelocateValues;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        if (!compareFunction) {
          needToRelocateValues = String(this[i - 1]) > String(this[i]);
        } else {
          needToRelocateValues = compareFunction(this[i - 1], this[i]) > 0;
        }

        if (needToRelocateValues) {
          const temp = this[i];

          this[i] = this[i - 1];
          this[i - 1] = temp;

          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
