'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const compareStrings = (arg1, arg2) => {
    const stringA = arg1.toString();
    const stringB = arg2.toString();

    if (stringA > stringB) {
      return 1;
    } else if (stringA < stringB) {
      return -1;
    } else {
      return 0;
    }
  };

  [].__proto__.sort2 = function(compareFunction = compareStrings) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const start = this[i - 1];
        const current = this[i];

        if (compareFunction(start, current) > 0) {
          this[i - 1] = current;
          this[i] = start;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
