'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  function defaultCompareFunction(a, b) {
    const stringA = String(a);
    const stringB = String(b);

    return stringA > stringB
      ? 1
      : stringA < stringB
        ? -1
        : 0;
  }

  [].__proto__.sort2 = function(compareFunction = defaultCompareFunction) {
    let wasChanged = true;

    while (wasChanged === true) {
      wasChanged = false;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const current = this[i];

        if (compareFunction(prev, current) > 0) {
          this[i] = prev;
          this[i - 1] = current;
          wasChanged = true;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
