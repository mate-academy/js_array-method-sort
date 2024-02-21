'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = strCompare) {
    let count = 0;

    do {
      count = 0;

      for (let i = 0; i < this.length - 1; i++) {
        const a = this[i];
        const b = this[i + 1];

        if (compareFunction(a, b) > 0) {
          count++;
          this[i] = b;
          this[i + 1] = a;
        }
      }
    } while (count > 0);

    return this;
  };

  function strCompare(a, b) {
    const aStr = String(a);
    const bStr = String(b);

    if (aStr > bStr) {
      return 1;
    } else if (aStr < bStr) {
      return -1;
    }

    return 0;
  }
}

module.exports = applyCustomSort;
