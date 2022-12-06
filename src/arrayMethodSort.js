'use strict';

/**
 * Implement method Sort
 */

const defaultCompare = (a, b) => {
  const strA = String(a);
  const strB = String(b);

  switch (true) {
    case strA > strB:
      return 1;

    case strA === strB:
      return 0;

    default:
      return -1;
  }
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = defaultCompare) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const current = this[i];

        if (compareFunction(prev, current) > 0) {
          count++;
          this[i] = prev;
          this[i - 1] = current;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
