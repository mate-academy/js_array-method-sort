'use strict';

/**
 * Implement method Sort
 */
const sortFunction = (a, b) => {
  const srtingA = String(a);
  const stringB = String(b);

  if (srtingA > stringB) {
    return 1;
  }

  if (srtingA === stringB) {
    return 0;
  }

  return -1;
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = sortFunction) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const curr = this[i];

        if (compareFunction(prev, curr) > 0) {
          count++;
          this[i - 1] = curr;
          this[i] = prev;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
