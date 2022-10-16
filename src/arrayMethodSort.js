'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = defaultCompare) {
    let countOfChanges;

    do {
      countOfChanges = 0;

      for (let i = 1; i < this.length; i++) {
        const currentValue = this[i];
        const previousValue = this[i - 1];

        if (compareFunction(previousValue, currentValue) > 0) {
          this[i - 1] = currentValue;
          this[i] = previousValue;
          countOfChanges++;
        }
      }
    } while (countOfChanges > 0);

    return this;
  };
}

function defaultCompare(a, b) {
  const firstString = String(a);
  const secondString = String(b);

  if (firstString > secondString) {
    return 1;
  } else if (firstString === secondString) {
    return 0;
  } else {
    return -1;
  }
}

module.exports = applyCustomSort;
