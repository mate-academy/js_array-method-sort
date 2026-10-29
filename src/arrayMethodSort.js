'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - 1 - i; j++) {
        let comparison;

        if (compareFunction !== undefined) {
          comparison = compareFunction(this[j], this[j + 1]);
        } else {
          const a = this[j];
          const b = this[j + 1];

          if (a < b) {
            comparison = -1;
          } else if (a > b) {
            comparison = 1;
          } else {
            comparison = 0;
          }
        }

        if (comparison > 0) {
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
