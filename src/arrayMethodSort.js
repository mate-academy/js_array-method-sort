'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    if (compareFunction === undefined) {
      for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this.length - 1 - i; j++) {
          const first = String(this[j]);
          const second = String(this[j + 1]);

          if (first > second) {
            const temp = this[j];

            this[j] = this[j + 1];
            this[j + 1] = temp;
          }
        }
      }
    } else {
      for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this.length - 1 - i; j++) {
          if (compareFunction(this[j], this[j + 1]) > 0) {
            const temp = this[j];

            this[j] = this[j + 1];
            this[j + 1] = temp;
          }
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
