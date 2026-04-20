'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (
    compareFunction = (a, b) => a.toString() > b.toString(),
  ) {
    for (let i = 1; i < this.length; i++) {
      const current = this[i];

      let j = i - 1;

      while (j >= 0 && compareFunction(this[j], current) > 0) {
        this[j + 1] = this[j];
        j--;
      }

      this[j + 1] = current;
    }

    return this;
  };
}

module.exports = applyCustomSort;
