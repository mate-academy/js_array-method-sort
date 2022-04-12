'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  function compareAsStrings(a, b) {
    const stringA = String(a);
    const stringB = String(b);

    if (stringA > stringB) {
      return 1;
    } else if (stringB < stringA) {
      return -1;
    }

    return 0;
  }

  [].__proto__.sort2 = function(compareFunction = compareAsStrings) {
    let count = 0;

    do {
      count = 0;

      for (let i = 0; i < this.length - 1; i++) {
        const next = this[i + 1];
        const current = this[i];

        if (compareFunction(current, next) > 0) {
          this[i + 1] = current;
          this[i] = next;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
