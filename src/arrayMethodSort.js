'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    if (!compareFunction) {
      for (let i = 0; i < this.length; i++) {
        let temp = this[i];

        for (let j = 0; j < this.length; j++) {
          if (this[i].toString() <= this[j].toString()) {
            temp = this[j];
            this[j] = this[i];
            this[i] = temp;
          }
        }
      }
    }

    if (compareFunction) {
      for (let i = 0; i < this.length; i++) {
        let temp = this[i];

        for (let j = 0; j < this.length; j++) {
          if (compareFunction(this[i], this[j]) <= 0) {
            temp = this[j];
            this[j] = this[i];
            this[i] = temp;
          }
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
