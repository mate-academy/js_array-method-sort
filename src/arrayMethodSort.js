'use strict';

/**
 * Implement method Sort
 */

function applyCustomSort() {
  [].__proto__.sort2 = function(callback = defaultCompare) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const previous = this[i - 1];
        const current = this[i];

        if (callback(previous, current) > 0) {
          count++;
          this[i - 1] = current;
          this[i] = previous;
        }
      }
    } while (count > 0);

    return this;
  };

  const defaultCompare = (a, b) => {
    const stringA = String(a).toLowerCase();
    const stringB = String(b).toLowerCase();

    if (stringA > stringB) {
      return 1;
    }

    if (stringA < stringB) {
      return -1;
    }

    return 0;
  };
}

module.exports = applyCustomSort;
