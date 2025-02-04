'use strict';

/**
 * Implement method Sort
 */
const compareAsStrings = (prev, current) => {
  const stringPrev = String(prev);
  const stringCurrent = String(current);

  if (stringPrev > stringCurrent) {
    return 1;
  }

  if (stringPrev < stringCurrent) {
    return -1;
  }

  return 0;
};

function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction = compareAsStrings) {
    let count = 0;

    do {
      count = 0;

      for (let i = 1; i <= this.length - 1; i++) {
        const prev = this[i - 1];
        const current = this[i];

        if (compareFunction(prev, current) > 0) {
          this[i] = prev;
          this[i - 1] = current;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
