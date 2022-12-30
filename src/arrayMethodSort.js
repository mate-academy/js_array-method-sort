'use strict';

/**
 * Implement method Sort
 */
const defaultCompare = (a, b) => {
  const stringA = String(a);
  const stringB = String(b);

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
    let swapped = true;

    while (swapped) {
      swapped = false;

      for (let i = 1; i < this.length; i++) {
        const a = this[i - 1];
        const b = this[i];

        if (compareFunction(a, b) > 0) {
          this[i] = a;
          this[i - 1] = b;
          swapped = true;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
