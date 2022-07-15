'use strict';

/**
 * Implement method Sort
 */
const defaultCompare = (a, b) => {
  const stringA = a.toString();
  const stringB = b.toString();

  if (stringA > stringB) {
    return 1;
  }

  if (stringA < stringB) {
    return -1;
  }

  return 0;
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = defaultCompare) {
    const arrLength = this.length;
    let compareCount;

    do {
      compareCount = 0;

      for (let i = 1; i < arrLength; i++) {
        const prev = this[i - 1];
        const curr = this[i];
        const compareResult = compareFunction(prev, curr);

        if (compareResult > 0) {
          this[i] = prev;
          this[i - 1] = curr;
          compareCount++;
        }
      }
    } while (compareCount > 0);

    return this;
  };
}

module.exports = applyCustomSort;
