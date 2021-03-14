'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const compareStrings = (x, y) => {
    const current = x.toString();
    const next = y.toString();

    if (current > next) {
      return 1;
    } else if (current < next) {
      return -1;
    }

    return 0;
  };

  [].__proto__.sort2 = function(compareFunction = compareStrings) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const currentValue = this[i];
        const previousValue = this[i - 1];

        if (compareFunction(previousValue, currentValue) > 0) {
          this[i] = previousValue;
          this[i - 1] = currentValue;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
