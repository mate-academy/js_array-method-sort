'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = (a, b) =>
    a.toString().localeCompare(b.toString())
  ) {
    let count;
    let prev;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        prev = this[i - 1];

        if (compareFunction(this[i], prev) < 0) {
          this[i - 1] = this[i];
          this[i] = prev;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
