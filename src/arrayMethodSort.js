'use strict';

/**
 * Implement method Sort
 */
const compareString = (a, b) => {
  const stringA = String(a);
  const stringB = String(b);

  if (stringA > stringB) {
    return 1;
  } else if (stringA === stringB) {
    return 0;
  } else {
    return -1;
  }
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareString) {
    let permutation;

    do {
      permutation = 0;

      for (let i = 1, l = this.length; i < l; i++) {
        if (compareFunction(this[i - 1], this[i]) > 0) {
          const prev = this[i - 1];

          this[i - 1] = this[i];
          this[i] = prev;
          permutation++;
        }
      }
    } while (permutation > 0);

    return this;
  };
}

module.exports = applyCustomSort;
