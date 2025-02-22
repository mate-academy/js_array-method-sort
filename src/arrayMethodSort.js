'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const compareFn =
      compareFunction ||
      ((a, b) => {
        return a.toString() > b.toString();
      });

    for (let i = 0; i < this.length; i++) {
      for (let k = i + 1; k < this.length; k++) {
        const firstValue = this[i];
        const secondValue = this[k];
        const result = compareFn(firstValue, secondValue);

        if (result === 0) {
          continue;
        }

        if (result > 0) {
          this[i] = secondValue;
          this[k] = firstValue;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
