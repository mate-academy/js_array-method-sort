'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  // Default comparison function
  function sortByDefault(a, b) {
    return String(a) > String(b) ? 1 : -1;
  }

  [].__proto__.sort2 = function(compareFunction = sortByDefault) {
    for (let i = 0; i < this.length - 1; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (compareFunction(this[i], this[j]) > 0) {
          // Swap elements if compareFunction returns a positive value
          const temp = this[i];

          this[i] = this[j];
          this[j] = temp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
