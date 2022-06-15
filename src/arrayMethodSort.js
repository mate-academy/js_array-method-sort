'use strict';

/**
 * Implement method Sort
 */
const compareStrings = (firstString, secondString) => {
  const firstComparedString = String(firstString);
  const secondComparedString = String(secondString);

  if (firstComparedString > secondComparedString) {
    return 1;
  } else if (firstComparedString < secondComparedString) {
    return -1;
  }

  return 0;
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareStrings) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const previousValue = this[i - 1];
        const currentValue = this[i];

        if (compareFunction(previousValue, currentValue) > 0) {
          this[i - 1] = currentValue;
          this[i] = previousValue;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}
module.exports = applyCustomSort;
