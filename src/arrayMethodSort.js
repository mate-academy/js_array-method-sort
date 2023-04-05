'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsString) {
    let iteration;

    do {
      iteration = false;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const current = this[i];

        if (compareFunction(prev, current) > 0) {
          iteration = true;
          this[i - 1] = current;
          this[i] = prev;
        }
      }
    } while (iteration === true);

    return this;
  };

  const compareAsString = (a, b) => {
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
}
module.exports = applyCustomSort;
