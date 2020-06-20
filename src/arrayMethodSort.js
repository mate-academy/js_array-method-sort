'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    if (compareFunction === undefined) {
      for (let i = 0; i < this.length - 1; i++) {
        for (let j = 0; j < this.length - 1 - i; j++) {
          if (this[j + 1].toString() < this[j].toString()) {
            const t = this[j + 1];

            this[j + 1] = this[j];
            this[j] = t;
          }
        }
      }

      return this;
    } else {
      for (let i = 0; i < this.length - 1; i++) {
        for (let j = 0; j < this.length - 1 - i; j++) {
          if (compareFunction(this[j].toString(), this[j + 1].toString()) > 0) {
            const t = this[j + 1];

            this[j + 1] = this[j];
            this[j] = t;
          }
        }
      }

      return this;
    }
  };
}

module.exports = applyCustomSort;
