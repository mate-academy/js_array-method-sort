'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const compareAsStings = (a, b) => {
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

  [].__proto__.sort2 = function(compareFunction = compareAsStings) {
    const index = 1;
    let counter = 0;

    do {
      counter = 0;

      for (let i = index; i < this.length; i++) {
        const prev = this[i - 1];
        const actual = this[i];

        if (compareFunction(prev, actual) > 0) {
          counter++;
          this[i - 1] = actual;
          this[i] = prev;
        }
      }
    } while (counter > 0);

    return this;
  };
};

module.exports = applyCustomSort;
