'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsString) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const previousElement = this[i - 1];
        const nextElement = this[i];

        if (compareFunction(previousElement, nextElement) > 0) {
          count++;
          this[i - 1] = nextElement;
          this[i] = previousElement;
        }
      }
    } while (count > 0);

    return this;
  };
}

function compareAsString(a, b) {
  const stringA = String(a);
  const stringB = String(b);

  if (stringA > stringB) {
    return 1;
  } else if (stringA === stringB) {
    return 0;
  } else {
    return -1;
  }
}

module.exports = applyCustomSort;
