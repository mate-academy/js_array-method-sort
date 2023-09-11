'use strict';

/**
 * Implement method Sort
 */
const defaultCompare = (a, b) => {
  const aToString = String(a);
  const bToString = String(b);

  if (aToString > bToString) {
    return 1;
  }

  if (aToString < bToString) {
    return -1;
  }

  return 0;
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = defaultCompare) {
    let changesDone;

    do {
      changesDone = 0;

      for (let i = 1; i < this.length; i++) {
        if (compareFunction(this[i - 1], this[i]) > 0) {
          const temporalPrevious = this[i - 1];

          this[i - 1] = this[i];
          this[i] = temporalPrevious;
          changesDone++;
        }
      }
    } while (changesDone !== 0);

    return this;
  };
}

module.exports = applyCustomSort;
