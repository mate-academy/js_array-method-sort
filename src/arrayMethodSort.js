'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    if (compareFunction === undefined) {
      for (let i = 0; i < this.length - 1; i++) {
        for (let j = i + 1; j < this.length; j++) {
          const a = '' + this[i];
          const b = '' + this[j];
          const change = this[i];

          if (a > b) {
            this[i] = this[j];
            this[j] = change;
          }
        }
      }
    } else {
      for (let i = 0; i < this.length - 1; i++) {
        for (let j = i; j < this.length; j++) {
          if (compareFunction(this[i], this[j]) > 0) {
            const temp = this[i];

            this[i] = this[j];
            this[j] = temp;
          }
        }
      };
    }

    return this;
  };
}

module.exports = applyCustomSort;
