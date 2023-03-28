'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let rememberValue;
    // [3, 12, 2, 11]

    if (compareFunction === undefined) {
      for (let i = 0; i < this.length; i++) {
        for (let j = i + 1; j < this.length; j++) {
          if (String(this[i]) > String(this[j])) {
            rememberValue = this[i];
            this[i] = this[j];
            this[j] = rememberValue;
          }
        }
      }
    } else {
      for (let i = 0; i < this.length; i++) {
        for (let j = i + 1; j < this.length; j++) {
          if (compareFunction(this[i], this[j]) > 0) {
            rememberValue = this[i];
            this[i] = this[j];
            this[j] = rememberValue;
          }
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
