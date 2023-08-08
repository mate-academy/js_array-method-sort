'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction =
  (a, b) => String(a) > String(b) ? 1 : 0) {
    let temporaryValue = null;

    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (compareFunction(this[i], this[j]) > 0) {
          temporaryValue = this[i];
          this[i] = this[j];
          this[j] = temporaryValue;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
