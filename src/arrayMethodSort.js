'use strict';

function defaultCompare(a, b) {
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

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = defaultCompare) {
    // write code here
    let count;

    do {
      count = false;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const current = this[i];

        if (compareFunction(prev, current) > 0) {
          count = true;
          this[i - 1] = current;
          this[i] = prev;
        }
      }
    } while (count);

    return this;
  };
}

module.exports = applyCustomSort;
