'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsString) {

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

  const compareAsString = (a, b) => {
    const prevString = String(a);
    const currentString = String(b);

    if (prevString > currentString) {
      return 1;
    }

    if (prevString === currentString) {
      return 0;
    }

    return -1;
  };
}

module.exports = applyCustomSort;
