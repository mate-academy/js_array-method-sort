'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsStrings) {
    let count;

    do {
      count = 0;

      for (let index = 1; index < this.length; index++) {
        const previous = this[index - 1];
        const current = this[index];

        if (compareFunction(previous, current) > 0) {
          count++;
          this[index - 1] = current;
          this[index] = previous;
        }
      }
    } while (count > 0);

    return this;
  };
}

function compareAsStrings(a, b) {
  const stringA = String(a);
  const stringB = String(b);

  if (stringA > stringB) {
    return 1;
  }

  if (stringA < stringB) {
    return -1;
  }

  return 0;
}

module.exports = applyCustomSort;
