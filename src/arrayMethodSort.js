'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(
    compareFunction = (a, b) => a.toString() >= b.toString() ? 1 : -1
  ) {
    for (let i = 0; i < this.length; i++) {
      let currentItem = this[i];

      for (let j = i + 1; j < this.length; j++) {
        if (compareFunction(currentItem, this[j]) > 0) {
          currentItem = this[j];
          this[j] = this[i];
          this[i] = currentItem;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
