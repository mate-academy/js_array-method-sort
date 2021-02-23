'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  // write code here
  const compareAsStrings = function(previous, current) {
    const previousString = String(previous);
    const currentString = String(current);

    if (previousString > currentString) {
      return 1;
    }

    if (previousString === currentString) {
      return 0;
    }

    return -1;
  };

  [].__proto__.sort2 = function(compareFunction = compareAsStrings) {
    let hasSomeChanges = true;

    while (hasSomeChanges) {
      hasSomeChanges = false;

      for (let i = 1; i < this.length; i++) {
        const previousValue = this[i - 1];
        const currentValue = this[i];

        if (compareFunction(previousValue, currentValue) > 0) {
          hasSomeChanges = true;
          this[i] = previousValue;
          this[i - 1] = currentValue;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
