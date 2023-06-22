'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    if (typeof compareFunction === 'function') {
      for (let i = 0; i < this.length - 1; i++) {
        for (let j = i + 1; j < this.length; j++) {
          if (compareFunction(this[j], this[i]) < 0) {
            const temp = this[i];

            this[i] = this[j];
            this[j] = temp;
          }
        }
      }
    } else {
      for (let i = 0; i < this.length - 1; i++) {
        for (let j = i + 1; j < this.length; j++) {
          if (String(this[j]) < String(this[i])) {
            const temp = this[i];

            this[i] = this[j];
            this[j] = temp;
          }
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
