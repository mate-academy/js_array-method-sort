'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort(arr) {
  [].__proto__.sort2 = function(compareFunction) {
    const defaultCompareFunction = (a, b) => {
      const aStr = a.toString();
      const bStr = b.toString();

      if (aStr < bStr) {
        return -1;
      }

      if (aStr > bStr) {
        return 1;
      }

      return 0;
    };

    const compareMethod = compareFunction || defaultCompareFunction;

    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - i - 1; j++) {
        if (compareMethod(this[j], this[j + 1]) > 0) {
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
