'use strict';

/**
 * Implement method Sort
 */
const compareAsStrings = (a, b) => {
  const stringA = String(a);
  const stringB = String(b);

  return stringA > stringB
    ? 1
    : -1;
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsStrings) {
    let swapped;

    do {
      swapped = 0;

      for (let j = 1; j < this.length; j++) {
        const prev = this[j - 1];
        const curent = this[j];

        if (compareFunction(prev, curent) > 0) {
          this[j - 1] = curent;
          this[j] = prev;
          swapped++;
        }
      }
    } while (swapped > 0);

    return this;
  };
}

module.exports = applyCustomSort;
