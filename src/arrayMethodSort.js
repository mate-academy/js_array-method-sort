'use strict';

/**
 * Implement method Sort
 */

function applyCustomSort() {
  const compareAsString = (a, b) => {
    const stringA = String(a);
    const stringB = String(b);

    return (stringA > stringB) ? 1 : (stringA === stringB) ? 0 : -1;
  };

  [].__proto__.sort2 = function(compareFunction = compareAsString) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const curr = this[i];

        if (compareFunction(prev, curr) > 0) {
          count++;
          this[i - 1] = curr;
          this[i] = prev;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
