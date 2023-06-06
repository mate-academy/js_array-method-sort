'use strict';

/**
 * Implement method Sort
 */
const compareAsStringsFunction = (a, b) => {
  const stringA = String(a);
  const stringB = String(b);

  switch (true) {
    case stringA > stringB: {
      return 1;
    }

    case stringA < stringB: {
      return -1;
    }

    default: {
      return 0;
    }
  }
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsStringsFunction) {
    let count;

    do {
      count = 0;

      for (let index = 1; index < this.length; index++) {
        const prev = this[index - 1];
        const current = this[index];

        if (compareFunction(prev, current) > 0) {
          this[index - 1] = current;
          this[index] = prev;

          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}
module.exports = applyCustomSort;
