'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsString) {
    let count;

    do {
      count = 0;

      for (let i = 0; i < this.length - 1; i++) {
        const current = this[i];
        const next = this[i + 1];

        if (compareFunction(current, next) > 0) {
          this[i] = next;
          this[i + 1] = current;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

function compareAsString(a, b) {
  const stringA = String(a);
  const stringB = String(b);

  switch (true) {
    case stringA > stringB:
      return 1;
    case stringA < stringB:
      return -1;
    default:
      return 0;
  }
}

module.exports = applyCustomSort;
