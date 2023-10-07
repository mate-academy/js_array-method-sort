'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - i - 1; j++) {
        const currentEl = this[j];

        const comparisonResult = compareFunction
          ? compareFunction(this[j], this[j + 1])
          : `${this[j]}` > `${this[j + 1]}`;

        if (comparisonResult > 0) {
          this[j] = this[j + 1];
          this[j + 1] = currentEl;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
