'use strict';

/**
 * Implement method Sort
 */

const compareAsStrings = (a, b) => {
  const stringA = String(a);
  const stringB = String(b);

  return (stringA > stringB) ? 1 : (stringA === stringB) ? 0 : -1;
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsStrings) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        if (compareFunction(this[i - 1], this[i]) > 0) {
          const temp = this[i];

          this[i] = this[i - 1];
          this[i - 1] = temp;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
