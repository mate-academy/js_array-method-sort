'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (
    compareFunction = (a, b) => (a.toString() > b.toString() ? 1 : -1),
  ) {
    for (let i = 1; i < this.length; i++) {
      const current = this[i];
      let j = i;

      while (j > 0 && compareFunction(this[j - 1], current) > 0) {
        this[j] = this[j - 1];
        j--;
      }

      this[j] = current;
    }

    return this;
  };
}

module.exports = applyCustomSort;
