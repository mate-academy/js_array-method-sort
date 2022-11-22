'use strict';

/**
 * Implement method Sort
 */
function compareStrings(previos, next) {
  const previosElem = String(previos);
  const nextElem = String(next);

  if (previosElem > nextElem) {
    return 1;
  }

  return 0;
}

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareStrings) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const previousValue = this[i - 1];
        const nextValue = this[i];

        if (compareFunction(previousValue, nextValue) > 0) {
          this[i - 1] = nextValue;
          this[i] = previousValue;

          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
