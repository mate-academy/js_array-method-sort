'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsString) {
    let isDif;

    do {
      isDif = false;

      for (let i = 0; i < this.length - 1; i++) {
        const prev = this[i];
        const current = this[i + 1];

        if (compareFunction(prev, current) > 0) {
          this[i] = current;
          this[i + 1] = prev;
          isDif = true;
        };
      }
    } while (isDif);

    return this;
  };
};

const compareAsString = function(a, b) {
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

module.exports = applyCustomSort;
