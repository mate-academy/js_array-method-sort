'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const compare = (prev, current) => {
    const stringPrev = String(prev);
    const stringCurr = String(current);

    if (stringPrev > stringCurr) {
      return 1;
    }

    if (stringPrev < stringCurr) {
      return -1;
    }

    return 0;
  };

  [].__proto__.sort2 = function(compareFunction = compare) {
    let count = 0;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        if (compareFunction(this[i - 1], this[i]) > 0) {
          const temp = this[i - 1];

          this[i - 1] = this[i];
          this[i] = temp;
          count++;
        }
      }
    } while (count);

    return this;
  };
}

module.exports = applyCustomSort;
