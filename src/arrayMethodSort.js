'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(
    compareFunction = (a, b) => a.toString() > b.toString()) {
    let count = 0;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const temp = this[i - 1];

        if (compareFunction(this[i - 1], this[i]) > 0) {
          this[i - 1] = this[i];
          this[i] = temp;
          count++;
        }
      }
    } while (count);

    return this;
  };
};

module.exports = applyCustomSort;
