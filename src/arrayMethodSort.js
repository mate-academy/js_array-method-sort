'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(
    compareFunction = ((prevValue, currentValue) =>
      prevValue.toString() > currentValue.toString())
  ) {
    let counter;

    do {
      counter = 0;

      for (let i = 1; i < this.length; i++) {
        const prevValue = this[i - 1];
        const currentValue = this[i];

        if (compareFunction(prevValue, currentValue) > 0) {
          this[i - 1] = currentValue;
          this[i] = prevValue;
          counter++;
        }
      }
    } while (counter !== 0);

    return this;
  };
}

module.exports = applyCustomSort;
