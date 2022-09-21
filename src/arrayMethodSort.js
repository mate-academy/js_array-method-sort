'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = defaultSort) {
    let swaps;

    do {
      swaps = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const current = this[i];

        if (compareFunction(prev, current) > 0) {
          [this[i - 1], this[i]] = [this[i], this[i - 1]];
          swaps++;
        }
      }
    } while (swaps > 0);

    return this;
  };

  function defaultSort(a, b) {
    const stringA = String(a);
    const stringB = String(b);

    if (stringA > stringB) {
      return 1;
    } else if (stringA === stringB) {
      return 0;
    } else {
      return -1;
    }
  }
}

module.exports = applyCustomSort;
