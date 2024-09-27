'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2
  = function(compareFunction) {
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
        for (let k = 0; k < this.length - i - 1; k++) {
          if (compareMethod(this[k], this[k + 1]) > 0) {
            const temp = this[k];

            this[k] = this[k + 1];
            this[k + 1] = temp;
          }
        }
      }

      return this;
    };
}

module.exports = applyCustomSort;
