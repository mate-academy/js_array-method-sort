'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const compareAsSrings = (a, b) => {
    const stringA = String(a);
    const stringB = String(b);

    if (stringA === stringB) {
      return 0;
    }

    return stringA > stringB ? 1 : -1;
  };

  [].__proto__.sort2 = function(compareFunction = compareAsSrings) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const curr = this[i];

        if (compareFunction(prev, curr) > 0) {
          this[i - 1] = curr;
          this[i] = prev;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
};

module.exports = applyCustomSort;
