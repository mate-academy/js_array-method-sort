'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let temp;

    if (!compareFunction) {
      for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this.length - i - 1; j++) {
          if (this[j].toString() > this[j + 1].toString()) {
            temp = this[j];
            this[j] = this[j + 1];
            this[j + 1] = temp;
          }
        }
      }
    } else {
      for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this.length - i - 1; j++) {
          if (+compareFunction(this[j], this[j + 1]) > 0) {
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
