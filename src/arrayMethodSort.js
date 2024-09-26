'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    if (!compareFunction) {
      for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this.length; j++) {
          if (String(this[i]) < String(this[j])) {
            const savedElement = this[i];

            this[i] = this[j];
            this[j] = savedElement;
          }
        }
      }
    } else {
      for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this.length; j++) {
          if (compareFunction(this[i], this[j]) < 0) {
            const savedElement = this[i];

            this[i] = this[j];
            this[j] = savedElement;
          } else {
            continue;
          }
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
