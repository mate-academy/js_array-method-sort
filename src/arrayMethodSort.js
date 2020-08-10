'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let callback = compareFunction;

    if (compareFunction === undefined) {
      callback = (a, b) => {
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
    }

    let counter;

    do {
      counter = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const current = this[i];

        if (callback(prev, current) > 0) {
          this[i - 1] = current;
          this[i] = prev;
          counter++;
        }
      }
    } while (counter > 0);

    return this;
  };
}

module.exports = applyCustomSort;
