'use strict';

/**
 * Implement method Sort
 */

function applyCustomSort() {
  const sortString = (a, b) => {
    const strA = String(a);
    const strB = String(b);

    if (strA > strB) {
      return 1;
    }

    if (strA === strB) {
      return 0;
    }

    return -1;
  };

  [].__proto__.sort2 = function(compareFunction = sortString) {
    let counter;

    do {
      counter = 0;

      for (let i = 0; i < this.length - 1; i++) {
        const prev = this[i];
        const current = this[i + 1];

        if (compareFunction(prev, current) > 0) {
          counter++;

          this[i] = current;
          this[i + 1] = prev;
        }
      }
    } while (counter > 0);

    return this;
  };
}

module.exports = applyCustomSort;
