'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let temp;

    if (compareFunction) {
      for (let j = 0; j < this.length - 1; j++) {
        for (let i = j + 1; i < this.length; i++) {
          if (compareFunction(this[j], this[i]) > 0) {
            temp = this[j];
            this[j] = this[i];
            this[i] = temp;
          }
        }
      }
    } else {
      for (let i = 0; i < this.length - 1; i++) {
        for (let j = 0; j < this.length - i - 1; j++) {
          if (String(this[j]) >= String(this[j + 1])) {
            temp = this[j];
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
