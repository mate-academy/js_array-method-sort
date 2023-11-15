'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsString) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const next = this[i];

        if (compareFunction(prev, next) > 0) {
          this[i - 1] = next;
          this[i] = prev;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };

  const compareAsString = (a, b) => {
    const stringA = a.toString();
    const stringB = b.toString();

    if (stringA > stringB) {
      return 1;
    } else if (stringA < stringB) {
      return -1;
    } else if (stringA === stringB) {
      return 0;
    }
  };
}

module.exports = applyCustomSort;
