'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  function compareString(a, b) {
    const firstString = String(a);
    const secString = String(b);

    if (firstString > secString) {
      return 1;
    }

    if (firstString === secString) {
      return 0;
    }

    return -1;
  }

  [].__proto__.sort2 = function(compareFunction = compareString) {
    let counter;

    do {
      counter = 0;

      for (let i = 0; i < this.length - 1; i++) {
        const prev = this[i];
        const current = this[i + 1];

        if (compareFunction(prev, current) > 0) {
          this[i] = current;
          this[i + 1] = prev;
          counter++;
        }
      }
    } while (counter > 0);

    return this;
  };
}

module.exports = applyCustomSort;
