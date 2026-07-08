'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    if (compareFunction === undefined) {
      for (let i = 0; i < this.length; i++) {
        for (let b = 0; b < this.length - 1; b++) {
          if (String(this[b]) > String(this[b + 1])) {
            const tempItem = this[b];

            this[b] = this[b + 1];
            this[b + 1] = tempItem;
          }
        }
      }
    } else {
      for (let i = 0; i < this.length; i++) {
        for (let b = 0; b < this.length - 1; b++) {
          if (compareFunction(this[b], this[b + 1]) > 0) {
            const tempItem = this[b];

            this[b] = this[b + 1];
            this[b + 1] = tempItem;
          }
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
