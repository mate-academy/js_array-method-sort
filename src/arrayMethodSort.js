'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = (a, b) => {
    const stringA = String(a);
    const stringB = String(b);

    if (stringA > stringB) {
      return 1;
    } else if (stringA < stringB) {
      return -1;
    } else {
      return 0;
    }
  }) {
    let prev;
    let current;
    let count;

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

module.exports = applyCustomSort;
