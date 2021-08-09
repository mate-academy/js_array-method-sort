'use strict';

/**
 * Implement method Sort
 */

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    // write code here
    let mainCompareFunction;

    if (compareFunction === undefined) {
      const compareWithArguments = (a, b) => {
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

      mainCompareFunction = compareWithArguments;
    } else {
      mainCompareFunction = compareFunction;
    };

    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const current = this[i];

        if (mainCompareFunction(prev, current) > 0) {
          count++;
          this[i - 1] = current;
          this[i] = prev;
        }
      }
    } while (count > 0);

    return this;
  };
};

module.exports = applyCustomSort;
