'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    if (compareFunction === undefined) {
      for (let i = 0; i < this.length; i++) {
        for (let k = 0; k < this.length; k++) {
          if ('' + this[k] > '' + this[k + 1]) {
            const temp = this[k];

            this[k] = this[k + 1];
            this[k + 1] = temp;
          }
        }
      }

      return this;
    }

    if (compareFunction) {
      for (let i = 0; i < this.length; i++) {
        for (let k = 0; k < this.length; k++) {
          if (compareFunction(this[k], this[k + 1]) >= 1) {
            const temp = this[k];

            this[k] = this[k + 1];
            this[k + 1] = temp;
          }
        }
      }

      return this;
    }
  };
}

module.exports = applyCustomSort;
