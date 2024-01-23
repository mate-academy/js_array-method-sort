'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    for (let i = 0; i < this.length; i++) {
      for (let i2 = i + 1; i2 < this.length; i2++) {
        const currentValue = this[i2];
        const shouldBeSorted = compareFunction
          ? compareFunction(this[i], this[i2]) > 0
          : this[i].toString() > this[i2].toString();

        if (shouldBeSorted) {
          this[i2] = this[i];
          this[i] = currentValue;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
