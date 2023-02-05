'use strict';

/**
 * Implement method Sort
 */

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const compareAsStrings = (a, b) => {
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

    let count = 0;

    do {
      count = 0;

      for (let i = 0; i < this.length; i++) {
        const prev = this[i];
        const current = this[i + 1];

        if (!compareFunction) {
          if (compareAsStrings(prev, current) > 0) {
            count++;
            this[i] = current;
            this[i + 1] = prev;
          }
        } else {
          if (compareFunction(prev, current) > 0) {
            count++;
            this[i] = current;
            this[i + 1] = prev;
          }
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
