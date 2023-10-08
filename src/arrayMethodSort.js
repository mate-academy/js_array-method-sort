'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  function defaultCompareFunction(a, b) {
    const stringA = String(a);
    const stringB = String(b);

    if (stringA > stringB) {
      return 1;
    } else if (stringA < stringB) {
      return -1;
    } else {
      return 0;
    }
  }

  [].__proto__.sort2 = function(compareFunction = defaultCompareFunction) {
    let wasChanged;

    do {
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
    } while (wasChanged === true);

    return this;
  };
}

module.exports = applyCustomSort;
