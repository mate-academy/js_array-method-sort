'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareValues) {
    for (let i = 0; i < this.length - 1; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (compareFunction(this[i], this[j]) > 0) {
          const item = this[i];

          this[i] = this[j];
          this[j] = item;
        }
      }
    }

    return this;
  };

  const compareValues = function(a, b) {
    return String(a) > String(b);
  };
}

module.exports = applyCustomSort;
