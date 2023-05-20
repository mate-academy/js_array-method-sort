'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(
    compareFunction = (a, b) => String(a) < String(b)
  ) {
    let transposition = 0;

    do {
      const thisCopy = [...this];

      transposition = 0;

      for (let i = 0; i < thisCopy.length - 1; i++) {
        const currentItem = thisCopy[i];
        const nextItem = thisCopy[i + 1];
        const compareMethod = compareFunction(nextItem, currentItem);

        if (compareMethod < 0 || compareMethod === true) {
          this[i] = nextItem;
          this[i + 1] = currentItem;
          transposition++;
          break;
        }
      }
    } while (transposition > 0);

    return this;
  };
}

module.exports = applyCustomSort;
