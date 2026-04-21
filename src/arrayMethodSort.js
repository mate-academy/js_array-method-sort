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
}

function compareAsString(prev, current) {
  const stringPrev = String(prev);
  const stringCurrent = String(current);

  if (stringPrev > stringCurrent) {
    return 1;
  }

  if (stringPrev < stringCurrent) {
    return -1;
  }

  return 0;
}

module.exports = applyCustomSort;
