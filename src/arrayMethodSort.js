'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(argumentCompareFunction) {
    const defaultCompareFunction = (a, b) => a > b ? 0 : -1;
    const compareFunction = argumentCompareFunction || defaultCompareFunction;
    let isSorted;

    do {
      for (let i = 0; i < this.length - 1; i++) {
        const a = this[i];
        const b = this[i + 1];

        if (compareFunction(a + '', b + '') >= 0) {
          isSorted = false;
          this[i] = b;
          this[i + 1] = a;
          break;
        }

        isSorted = true;
      }
    } while (!isSorted);

    return this;
  };
}

module.exports = applyCustomSort;
