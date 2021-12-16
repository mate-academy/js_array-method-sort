'use strict';

/**
 * Implement method Sort
 */
const compareStrings = function(a, b) {
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
  [].__proto__.sort2 = function(compareFunction = compareStrings) {
    let count;
    let prev;
    let current;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        prev = this[i - 1];
        current = this[i];

        if (compareFunction(prev, current) > 0) {
          this[i] = prev;
          this[i - 1] = current;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
