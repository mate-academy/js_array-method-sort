'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let rememberValue;

    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (compareFunction === undefined) {
          if (String(this[i]) > String(this[j])) {
            rememberValue = this[i];
            this[i] = this[j];
            this[j] = rememberValue;
          }
        } else {
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
