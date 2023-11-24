'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  function stringCompare(a, b) {
    const x = String(a).toLowerCase();
    const y = String(b).toLowerCase();

    if (x > y) {
      return 1;
    }

    if (x < y) {
      return -1;
    }

    if (x === y) {
      return 0;
    }
  }

  [].__proto__.sort2 = function(compareFunction = stringCompare) {
    // write code here
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
}

module.exports = applyCustomSort;
