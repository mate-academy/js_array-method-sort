'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFn) {
    const compareFunction =
      compareFn ||
      function (aVal, bVal) {
        const a = String(aVal);
        const b = String(bVal);

        if (a < b) {
          return -1;
        }

        if (a > b) {
          return 1;
        }

        return 0;
      };

    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - 1 - i; j++) {
        if (compareFunction(this[j], this[j + 1]) > 0) {
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
