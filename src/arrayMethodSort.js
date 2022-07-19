'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const compareAsStrings = (a, b) => {
    const stringA = String(a);
    const stringB = String(b);

    if (stringA === stringB) {
      return 0;
    }

    return stringA > stringB ? 1 : -1;
  };

  [].__proto__.sort2 = function(compareFunction = compareAsStrings) {
    let isSorted;

    do {
      isSorted = true;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const current = this[i];

        if (compareFunction(prev, current) > 0) {
          isSorted = false;
          this[i - 1] = current;
          this[i] = prev;
        }
      }
    } while (!isSorted);

    return this;
  };
}

module.exports = applyCustomSort;
