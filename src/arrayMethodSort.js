'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const standartCompare = (previous, current) => {
    const stringPrevious = String(previous);
    const stringCurrent = String(current);

    if (stringPrevious > stringCurrent) {
      return 1;
    }

    if (stringPrevious === stringCurrent) {
      return 0;
    }

    if (stringPrevious < stringCurrent) {
      return -1;
    }
  };

  [].__proto__.sort2 = function(compareFunction = standartCompare) {
    let countOfReplacement = 0;

    do {
      countOfReplacement = 0;

      for (let i = 1; i < this.length; i++) {
        const previous = this[i - 1];
        const current = this[i];

        if (compareFunction(previous, current) > 0) {
          this[i - 1] = current;
          this[i] = previous;
          countOfReplacement++;
        }
      }
    } while (countOfReplacement > 0);

    return this;
  };
}

module.exports = applyCustomSort;
