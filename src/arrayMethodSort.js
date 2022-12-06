'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = defaultCompare) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const curr = this[i];

        if (compareFunction(prev, curr) > 0) {
          this[i - 1] = curr;
          this[i] = prev;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

const defaultCompare = (a, b) => {
  const aStr = String(a);
  const bStr = String(b);

  if (aStr > bStr) {
    return 1;
  } else if (aStr === bStr) {
    return 0;
  }

  return -1;
};

module.exports = applyCustomSort;
