'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    if (compareFunction === undefined) {
      for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this.length; j++) {
          if (this[j] + '' > this[j + 1] + '') {
            const current = this[j];
            this[j] = this[j + 1];
            this[j + 1] = current;
          }
        }
      }
    } else {
      for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this.length; j++) {
          if (compareFunction(this[j], this[j + 1]) > 0) {
            const current = this[j];
            this[j] = this[j + 1];
            this[j + 1] = current;
          }
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
