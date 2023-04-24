'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareFunctionWithString) {
    let hasSwapped = false;

    do {
      hasSwapped = false;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const current = this[i];

        if (compareFunction(prev, current) > 0) {
          this[i - 1] = current;
          this[i] = prev;
          hasSwapped = true;
        }
      }
    } while (hasSwapped);

    return this;
  };

  const compareFunctionWithString = function(a, b) {
    const strA = String(a);
    const strB = String(b);

    if (strA > strB) {
      return 1;
    } else if (strA < strB) {
      return -1;
    } else {
      return 0;
    }
  };
}

module.exports = applyCustomSort;
