'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    // write code here

    for (let i = 0; i < this.length; i++) {
      for (let j = i; j < this.length; j++) {
        if (compareFunction) {
          if (compareFunction(this[i], this[j]) > 0) {
            const x = this[i];

            this[i] = this[j];
            this[j] = x;
          }
        } else {
          if (String(this[j]) < String(this[i])) {
            const x = this[i];

            this[i] = this[j];
            this[j] = x;
          }
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
