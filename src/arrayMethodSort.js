'use strict';

/**
 * Implement method Sort
 */

// const compareAsString

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = callback) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const current = this[i];

        if (compareFunction(prev, current) > 0) {
          count++;
          this[i - 1] = current;
          this[i] = prev;
        }
      }
    } while (count > 0);

    return this;
  };
}

const callback = function(a, b) {
  const stringA = a.toString();
  const stringB = b.toString();

  if (stringA > stringB) {
    return 1;
  } else if (stringA < stringB) {
    return -1;
  } else {
    return 0;
  }
};

module.exports = applyCustomSort;
