'use strict';

/**
 * Implement method Sort
 */
const compareFunction = function(prev, current) {
  const stringPrev = String(prev);
  const stringCurrent = String(current);

  if (stringPrev > stringCurrent) {
    return 1;
  } else if (stringPrev === stringCurrent) {
    return 0;
  } else {
    return -1;
  }
};

function applyCustomSort() {
  [].__proto__.sort2 = function(callback = compareFunction) {
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
