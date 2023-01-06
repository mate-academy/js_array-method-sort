'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const defaultCompare = (a, b) => {
    const stringA = a.toString();
    const stringB = b.toString();

    if (stringA > stringB) {
      return 1;
    }

    if (stringA === stringB) {
      return 0;
    }

    return -1;
  };

  [].__proto__.sort2 = function(compareFunction = defaultCompare) {
    let count;

    do {
      count = 0;

      for (let i = 0; i < this.length - 1; i++) {
        const temp = this[i];

        if (compareFunction(this[i], this[i + 1]) > 0) {
          this[i] = this[i + 1];
          this[i + 1] = temp;
          count++;
        }
      }
    } while (count);

    return this;
  };
};

module.exports = applyCustomSort;
