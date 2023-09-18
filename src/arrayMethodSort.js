'use strict';

/**
 * Implement method Sort
 */

const compareStringFunction = (x, y) => {
  const stringX = x.toString();
  const stringY = y.toString();

  if (stringX > stringY) {
    return 1;
  }

  if (stringY > stringX) {
    return -1;
  }

  return 0;
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareStringFunction) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const cur = this[i];

        if (compareFunction(prev, cur) > 0) {
          count++;
          this[i - 1] = cur;
          this[i] = prev;
        }
      }
    } while (count > 0);

    return this;
  };
};

module.exports = applyCustomSort;
