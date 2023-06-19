'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = (a, b) => {
    return a.toString() > b.toString();
  }) {
    for (let i = 0; i < this.length - 1; i++) {
      for (let y = i + 1; y < this.length; y++) {
        if (compareFunction(this[i], this[y]) > 0) {
          const tempValue = this[i];

          this[i] = this[y];
          this[y] = tempValue;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
