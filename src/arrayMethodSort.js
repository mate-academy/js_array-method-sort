'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(
    // The comparison function, if it isn't passed,
    // we use the standard string comparison
    compareFunction = (prev, item) => (String(prev) > String(item))) {
    // Implementation of the sorting cycle
    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        // Compare elements using the comparison function
        if (compareFunction(this[i], this[j]) > 0) {
          const swap = this[i];

          this[i] = this[j];

          this[j] = swap;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
