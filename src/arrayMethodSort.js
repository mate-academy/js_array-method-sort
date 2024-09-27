'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let rememberValue;

    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        const condition = compareFunction
          ? compareFunction(this[i], this[j]) > 0
          : String(this[i]) > String(this[j]);

        if (condition) {
          rememberValue = this[i];
          this[i] = this[j];
          this[j] = rememberValue;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
