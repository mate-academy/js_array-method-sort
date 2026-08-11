'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - 1 - i; j++) {
        let comparison;

        if (compareFunction) {
          comparison = compareFunction(this[j], this[j + 1]);
        } else {
          const first = String(this[j]);
          const second = String(this[j + 1]);

          if (first > second) {
            comparison = 1;
          } else if (first < second) {
            comparison = -1;
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
