'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(
    compareFunction = (a, b) => a.toString() >= b.toString() ? 1 : -1
  ) {
    for (let i = 0; i < this.length - 1; i++) {
      let current = this[i];

      for (let j = i + 1; j < this.length; j++) {
        if (compareFunction(current, this[j]) > 0) {
          current = this[j];
          this[j] = this[i];
          this[i] = current;
        }
      }

      this[i] = current;
    }

    return this;
  };
}

module.exports = applyCustomSort;
