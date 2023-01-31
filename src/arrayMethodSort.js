'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsStr) {
    let count;

    do {
      count = false;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const current = this[i];

        if (compareFunction(prev, current) > 0) {
          count = true;
          this[i - 1] = current;
          this[i] = prev;
        }
      }
    } while (count > 0);

    return this;
  };

  const compareAsStr = (a, b) => {
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
}

module.exports = applyCustomSort;
