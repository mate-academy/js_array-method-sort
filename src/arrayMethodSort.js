'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = stringsComparison) {
    // write code here
    let count = 0;
    let prev;
    let current;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        prev = this[i - 1];
        current = this[i];

        if (compareFunction(prev, current) > 0) {
          this[i - 1] = current;
          this[i] = prev;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

const stringsComparison = (a, b) => {
  const stringA = String(a);
  const stringB = String(b);

  if (stringA > stringB) {
    return 1;
  } else if (stringA < stringB) {
    return -1;
  } else {
    return 0;
  }
};

module.exports = applyCustomSort;
