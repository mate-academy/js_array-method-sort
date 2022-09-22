'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = defaultCompareFunction) {
    let swaps = 0;

    for (let i = 1; i < this.length; i++) {
      const prev = this[i - 1];
      const current = this[i];

      if (compareFunction(prev, current) > 0) {
        [this[i - 1], this[i]] = [this[i], this[i - 1]];
        swaps++;
      }

      if (i === this.length - 1 && swaps) {
        i = 0;
        swaps = 0;
      }
    }

    return this;
  };

  function defaultCompareFunction(a, b) {
    const stringA = String(a);
    const stringB = String(b);

    if (stringA > stringB) {
      return 1;
    }

    if (stringA === stringB) {
      return 0;
    }

    return -1;
  }
}

module.exports = applyCustomSort;
