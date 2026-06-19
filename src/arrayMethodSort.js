'use strict';

/**
 * Implement method Sort
 */
const compareAsStrings = (a, b) => {
  const stringA = a.toString();
  const stringB = b.toString();

  if (stringA > stringB) {
    return 1;
  }

  if (stringA === stringB) {
    return 0;
  }

  return -1;
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsStrings) {
    let swapped;

    do {
      swapped = false;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const current = this[i];

        if (compareFunction(prev, current) > 0) {
          [this[i - 1], this[i]] = [current, prev];
          swapped = true;
        }
      }
    } while (swapped);

    return this;
  };
}

module.exports = applyCustomSort;
