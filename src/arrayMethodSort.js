'use strict';

/**
 * Implement method Sort
 */

function applyCustomSort() {
  const compareAsStrings = (previous, current) => {
    const stringPrevious = String(previous);
    const stringCurrent = String(current);

    if (stringPrevious > stringCurrent) {
      return 1;
    } else if (stringPrevious === stringCurrent) {
      return 0;
    } else {
      return -1;
    }
  };

  [].__proto__.sort2 = function(callback = compareAsStrings) {
    let count;

    do {
      count = false;

      for (let i = 1; i < this.length; i++) {
        const previous = this[i - 1];
        const current = this[i];

        if (callback(previous, current) > 0) {
          count++;
          this[i - 1] = current;
          this[i] = previous;
        }
      }
    } while (count !== false);

    return this;
  };
}

module.exports = applyCustomSort;
