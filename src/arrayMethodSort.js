'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let tmp;

    if (compareFunction === undefined) {
      for (let i = 0; i < this.length; i++) {
        for (let j = i + 1; j < this.length; j++) {
          if (this[i].toString() > this[j].toString()) {
            tmp = this[i];
            this[i] = this[j];
            this[j] = tmp;
          }
        }
      }
    } else {
      for (let i = 0; i < this.length; i++) {
        for (let j = i + 1; j < this.length; j++) {
          if (compareFunction(this[i], this[j]) > 0) {
            tmp = this[i];
            this[i] = this[j];
            this[j] = tmp;
          }
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
