'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareStrings) {
    if (this.length === 1) {
      return this;
    }

    let count;

    do {
      count = false;

      for (let i = 1; i < this.length; i++) {
        if (compareFunction(this[i - 1], this[i]) > 0) {
          const previous = this[i - 1];
          const current = this[i];

          this[i - 1] = current;
          this[i] = previous;

          count = true;
        };
      }
    } while (count);

    return this;
  };
}

const compareStrings = function(a, b) {
  const stringA = String(a);
  const stringB = String(b);

  if (stringA > stringB) {
    return 1;
  }

  if (stringA === stringB) {
    return 0;
  }

  return -1;
};

module.exports = applyCustomSort;
