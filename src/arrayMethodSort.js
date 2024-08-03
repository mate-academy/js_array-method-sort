'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  function compareAsString(a, b) {
    let x = a;
    let y = b;

    x = String(x);
    y = String(y);

    if (x > y) {
      return 1;
    }

    if (x < y) {
      return -1;
    }

    return 0;
  }

  [].__proto__.sort2 = function (compareFunction = compareAsString) {
    let count;

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
