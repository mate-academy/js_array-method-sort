'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prevValue = this[i - 1];
        const currentValue = this[i];
        let needToSwapValues;

        if (!compareFunction) {
          needToSwapValues = String(prevValue) > String(currentValue);
        } else {
          needToSwapValues = compareFunction(prevValue, currentValue) > 0;
        }

        if (needToSwapValues) {
          this[i - 1] = currentValue;
          this[i] = prevValue;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
