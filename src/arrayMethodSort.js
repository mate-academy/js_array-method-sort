'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const compareStrings = (a, b) => {
    const aString = String(a);
    const bString = String(b);

    if (aString < bString) {
      return -1;
    }

    if (aString > bString) {
      return 1;
    }
  };

  [].__proto__.sort2 = function(compareFunction = compareStrings) {
    let iterationCount;

    do {
      iterationCount = 0;

      for (let i = 1; i < this.length; i++) {
        const previousValue = this[i - 1];
        const currentValue = this[i];

        if (compareFunction(previousValue, currentValue) > 0) {
          iterationCount++;
          this[i - 1] = currentValue;
          this[i] = previousValue;
        }
      }
    } while (iterationCount > 0);

    return this;
  };
}

module.exports = applyCustomSort;
