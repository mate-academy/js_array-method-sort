'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsStrings) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const previous = this[i - 1];
        const current = this[i];

        if (compareFunction(previous, current) > 0) {
          this[i - 1] = current;
          this[i] = previous;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };

  function compareAsStrings(a, b) {
    const stringA = a.toString();
    const stringB = b.toString();

    if (stringA > stringB) {
      return 1;
    }

    if (stringA < stringB) {
      return -1;
    }

    return 0;
  }
}

module.exports = applyCustomSort;
