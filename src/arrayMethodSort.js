'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const comparator = (a, b) => {
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

  [].__proto__.sort2 = function(compareFunction = comparator) {
    let counter;

    do {
      counter = 0;

      for (let i = 1; i < this.length; i++) {
        const previous = this[i - 1];
        const current = this[i];

        if (compareFunction(previous, current) > 0) {
          counter++;
          this[i - 1] = current;
          this[i] = previous;
        }
      }
    } while (counter > 0);

    return this;
  };
}

module.exports = applyCustomSort;
