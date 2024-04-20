'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (customCompareFunction) {
    const compareFunction =
      customCompareFunction ||
      ((a, b) => {
        const aString = typeof a === 'number' ? a.toString() : a;
        const bString = typeof b === 'number' ? b.toString() : b;

        if (aString < bString) {
          return -1;
        }

        if (aString > bString) {
          return 1;
        }

        return 0;
      });

    const len = this.length;

    for (let i = 0; i < len - 1; i++) {
      for (let j = 0; j < len - 1 - i; j++) {
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
