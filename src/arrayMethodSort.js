'use strict';

/**
 * Implement method Sort
 */
const defaultCompare = (previous, current) => {
  const stringPrevious = String(previous);
  const stringCurrent = String(current);

  return stringPrevious > stringCurrent
    ? 1
    : -1;
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = defaultCompare) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i += 1) {
        const current = this[i];
        const previous = this[i - 1];

        if (compareFunction(previous, current) > 0) {
          count += 1;
          this[i] = previous;
          this[i - 1] = current;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
