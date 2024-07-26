'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const compFunc =
      compareFunction ||
      function (a, b) {
        const aStr = String(a);
        const bStr = String(b);

        if (aStr < bStr) {
          return -1;
        }

        if (aStr > bStr) {
          return 1;
        }

        return 0;
      };

    for (let i = 1; i < this.length; i++) {
      const current = this[i];
      let j = i - 1;

      while (j >= 0 && compFunc(this[j], current) > 0) {
        this[j + 1] = this[j];
        j--;
      }
      this[j + 1] = current;
    }

    return this;
  };
}

module.exports = applyCustomSort;
