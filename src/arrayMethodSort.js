'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    if (typeof compareFunction === 'function') {
      for (let i = 0; i < this.length; i++) {
        for (let j = i; j < this.length; j++) {
        if (compareFunction(this[i], this[j]) > 0) {
            let temp = this[i];
            this[i] = this[j];
            this[j] = temp;
          }
        }
      }
    } else {
      return this;
    }
  };
}

module.exports = applyCustomSort;
