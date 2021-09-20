'use strict';

/**
 * Implement method Sort
 */
const sortString = (a, b) => {
  const stringA = String(a);
  const stringB = String(b);

  if (stringA > stringB) {
    return 1;
  } else if (stringA === stringB) {
    return -1;
  } else {
    return 0;
  }
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = sortString) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const firstEl = this[i - 1];
        const secondEl = this[i];

        if (compareFunction(firstEl, secondEl) > 0) {
          count++;
          this[i - 1] = secondEl;
          this[i] = firstEl;
        }
      }
    } while (count > 0);

    return this;
  };
};

module.exports = applyCustomSort;
