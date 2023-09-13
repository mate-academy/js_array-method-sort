'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    function compareFn(a, b) {
      if (a < b) {
        return -1;
      }

      if (a > b) {
        return 1;
      }

      if (a === b) {
        return 0;
      }
    };

    if (!compareFunction) {
      for (let i = 0; i < this.length; i++) {
        for (let j = i + 1; j < this.length; j++) {
          if (compareFn(`${this[i]}`, `${this[j]}`) === 1) {
            const temp = this[i];

            this[i] = this[j];
            this[j] = temp;
          }
        }
      };

      return this;
    } else {
      for (let i = 0; i < this.length; i++) {
        for (let j = i + 1; j < this.length; j++) {
          if (compareFunction(this[i], this[j]) > 0) {
            const temp = this[i];

            this[i] = this[j];
            this[j] = temp;
          }
        }
      };

      return this;
    }
  };
}

module.exports = applyCustomSort;
