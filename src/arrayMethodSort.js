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
        const current = this[i];
        const prev = this[i - 1];

        if (compareFunction(prev, current) > 0) {
          this[i] = prev;
          this[i - 1] = current;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
};

function compareAsString(a, b) {
  const stringA = String(a);
  const stringB = String(b);

  return (stringA > stringB) ? 1 : (stringA < stringB) ? -1 : 0;
}

module.exports = applyCustomSort;
