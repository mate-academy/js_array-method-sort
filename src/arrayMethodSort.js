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
        const prev = this[i - 1];
        const current = this[i];

        if (compareFunction(prev, current) > 0) {
          count++;
          this[i - 1] = current;
          this[i] = prev;
        }
      }
    } while (count > 0);

    return this;
  };
}

const compareAsString = (a, b) => {
  const stringA = String(a);
  const stringB = String(b);

  return stringA > stringB ? 1
    : stringA === stringB ? 0 : -1;
};

module.exports = applyCustomSort;
