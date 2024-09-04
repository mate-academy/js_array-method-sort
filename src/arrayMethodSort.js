'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    if (compareFunction === undefined) {
      for (let i = 0; i < this.length; i++) {
        for (let k = 0; k < this.length - i - 1; k++) {
          if ('' + this[k] > '' + this[k + 1]) {
            [this[k], this[k + 1]] = [this[k + 1], this[k]];
          }
        }
      }

      return this;
    }

    if (compareFunction) {
      for (let i = 0; i < this.length; i++) {
        for (let k = 0; k < this.length - i - 1; k++) {
          if (compareFunction(this[k], this[k + 1]) > 0) {
            [this[k], this[k + 1]] = [this[k + 1], this[k]];
          }
        }
      }

      return this;
    }
  };
}

module.exports = applyCustomSort;
