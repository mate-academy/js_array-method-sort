'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(
    compareFunction = (a, b) => (a.toString() >= b.toString() ? 1 : -1)
  ) {
    for (let i = 0; i < this.length; i++) {
      for (let k = i; k < this.length; k++) {
        if (compareFunction(this[i], this[k]) > 0) {
          const tempValue = this[k];

          this[k] = this[i];
          this[i] = tempValue;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
