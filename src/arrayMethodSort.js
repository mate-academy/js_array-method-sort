'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareDefault) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const current = this[i];
        const prev = this[i - 1];

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

const compareDefault = (a, b) => {
  const stringA = String(a);
  const stringB = String(b);

  if (stringA === stringB) {
    return 0;
  }

  return stringA > stringB ? 1 : -1;
};

module.exports = applyCustomSort;
