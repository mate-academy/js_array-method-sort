'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareStrings) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const current = this[i];

        if (compareFunction(prev, current) > 0) {
          count++;
          this[i] = prev;
          this[i - 1] = current;
        }
      }
    } while (count > 0);

    return this;
  };
}

const compareStrings = (a, b) => {
  const stringA = a.toString();
  const stringB = b.toString();

  if (stringA > stringB) {
    return 1;
  } else if (stringB > stringA) {
    return -1;
  } else {
    return 0;
  }
};

module.exports = applyCustomSort;
