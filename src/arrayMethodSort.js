'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2
  = function(customCompareFunction = (a, b) => `${a}` > `${b}`) {
      let compareFunction = customCompareFunction;

      if (typeof compareFunction !== 'function') {
        compareFunction = (a, b) => {
          if (a < b) {
            return -1;
          }

          if (a > b) {
            return 1;
          }

          return 0;
        };
      }

      for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this.length - i - 1; j++) {
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
