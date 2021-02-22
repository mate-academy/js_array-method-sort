'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  // write code here
  const compareAsStrings = function(a, b) {
    const aString = String(a);
    const bString = String(b);

    if (aString > bString) {
      return 1;
    }

    if (aString === bString) {
      return 0;
    }

    return -1;
  };

  [].__proto__.sort2 = function(compareFunction = compareAsStrings) {
    // write code here
    let count = 1;

    while (count > 0) {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const previousValue = this[i - 1];
        const currentValue = this[i];

        if (compareFunction(previousValue, currentValue) > 0) {
          count++;
          this[i] = previousValue;
          this[i - 1] = currentValue;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
