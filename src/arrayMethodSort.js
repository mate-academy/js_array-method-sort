'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let count;
    const defaultSort = (a, b) => {
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
    const sortFunction = compareFunction || defaultSort;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const current = this[i];

        if (sortFunction(prev, current) > 0) {
          this[i - 1] = current;
          this[i] = prev;
          count++;
        };
      };
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
