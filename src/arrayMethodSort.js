'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const compareStrings = (a, b) => {
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

  [].__proto__.sort2 = function(compareFunction = compareStrings) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const next = this[i];

        if (compareFunction(prev, next) > 0) {
          count++;
          this[i - 1] = next;
          this[i] = prev;
        }

        if (arguments.length < 1) {

        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
