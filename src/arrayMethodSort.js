'use strict';

/**
 * Implement method Sort
 */

const compareStrings = (prev, current) => {
  const stringPrev = prev.toString();
  const stringCurrent = current.toString();

  if (stringPrev > stringCurrent) {
    return 1;
  }

  if (stringPrev < stringCurrent) {
    return -1;
  }

  return 0;
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareStrings) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prevElem = this[i - 1];
        const currentElem = this[i];

        if (compareFunction(prevElem, currentElem) > 0) {
          this[i - 1] = currentElem;
          this[i] = prevElem;

          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
