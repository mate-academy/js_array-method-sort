'use strict';

/**
 * Implement method Sort
 */
function compareAsStrings(a, b) {
  const stringA = `${a}`;
  const stringB = `${b}`;

  return stringA > stringB
    ? 1
    : stringA < stringB
      ? -1
      : 0;
}

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsStrings) {
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
