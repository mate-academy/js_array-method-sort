'use strict';

/**
 * Implement method Sort
 */
function compareAsStrings(a, b) {
  const stringA = String(a);
  const stringB = String(b);

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
        const previous = this[i - 1];
        const current = this[i];

        if (compareFunction(previous, current) > 0) {
          this[i - 1] = current;
          this[i] = previous;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
