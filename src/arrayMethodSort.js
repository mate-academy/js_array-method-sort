'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = defaultComparison) {
    let count = 1;

    while (count !== 0) {
      let prev = this[0];

      count = 0;

      for (let i = 1; i < this.length; i++) {
        if (compareFunction(prev, this[i]) > 0) {
          this[i - 1] = this[i];
          this[i] = prev;
          count++;
        }

        prev = this[i];
      }
    }

    return this;
  };

  function defaultComparison(a, b) {
    if (a.toString() < b.toString()) {
      return -1;
    }

    if (a.toString() === b.toString()) {
      return 0;
    }

   return 1;
  }
}

module.exports = applyCustomSort;
