'use strict';

/**
 * Implement method Sort
 */
const compareAsStrings = (a, b) => {
  const prevItem = String(a);
  const currentItem = String(b);

  if (prevItem > currentItem) {
    return 1;
  }

  if (prevItem === currentItem) {
    return 0;
  }

  return -1;
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsStrings) {
    let count = 0;

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
}

module.exports = applyCustomSort;
