'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const defaultCompare = function(prev, current) {
    const prevString = prev.toString();
    const currentString = current.toString();

    if (prevString > currentString) {
      return 1;
    }

    if (prevString < currentString) {
      return -1;
    }

    return 0;
  };

  [].__proto__.sort2 = function(compareFunction = defaultCompare) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const current = this[i];

        if (compareFunction(prev, current) > 0) {
          count++;
          this[i - 1] = current;
          this[i] = prev;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
