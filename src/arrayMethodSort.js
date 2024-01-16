'use strict';

/**
 * Implement method Sort
 */
const compareAsStrings = (a, b) => {
  const stringA = String(a);
  const stringB = String(b);

  if (stringA > stringB) {
    return 1;
  }

  if (stringA < stringB) {
    return -1;
  }

  if (stringA === stringB) {
    return 0;
  }
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsStrings) {
    let count = 0;

    do {
      count = 0;

      for (let i = 0; i < this.length - 1; i++) {
        const x = this[i];
        const y = this[i + 1];

        if (compareFunction(x, y) > 0) {
          this[i] = y;
          this[i + 1] = x;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
