'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = (prev, cur) => String(prev) > String(cur)) {
    for (let i = 0; i < this.length; i++) {
      for (let j = 1; j < this.length; j++) {
        const current = this[j];
        const previous = this[j - 1];

        if (compareFunction(previous, current) > 0) {
          this[j - 1] = current;
          this[j] = previous;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
