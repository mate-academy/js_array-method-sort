'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const compareAsString = (a, b) => {
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

  [].__proto__.sort2 = function(compareFunction = compareAsString) {
    let count = 0;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const current = this[i];

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
