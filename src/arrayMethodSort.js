'use strict';

/**
 * Implement method Sort
 */

function compareStrings(prev, current) {
  if (String(prev) > String(current)) {
    return 1;
  }

  if (String(prev) === String(current)) {
    return 0;
  }

  return -1;
}

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareStrings) {
    let countIteration = 0;

    do {
      countIteration = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const current = this[i];

        if (compareFunction(prev, current) > 0) {
          countIteration++;
          this[i - 1] = current;
          this[i] = prev;
        }
      }
    } while (countIteration > 0);

    return this;
  };
}

module.exports = applyCustomSort;
