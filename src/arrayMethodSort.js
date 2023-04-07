'use strict';

/**
 * Implement method Sort
 */
const compareStrings = (a, b) => {
  const stringA = String(a);
  const stringB = String(b);

  if (stringA > stringB) {
    return 1;
  }

  if (stringA === stringB) {
    return 0;
  }

  return -1;
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compare = compareStrings) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const curr = this[i];
        const prev = this[i - 1];

        if (compare(prev, curr) > 0) {
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
