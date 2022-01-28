'use strict';

/**
 * Implement method Sort
 */

const compareAsString = (a, b) => {
  const stringOne = String(a);
  const stringTwo = String(b);

  if (stringOne > stringTwo) {
    return 1;
  }

  if (stringOne === stringTwo) {
    return 0;
  }

  if (stringOne < stringTwo) {
    return -1;
  }
};

function applyCustomSort() {
  [].__proto__.sort2 = function(callback = compareAsString) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const current = this[i];

        if (callback(prev, current) > 0) {
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
