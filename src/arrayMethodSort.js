'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsStrings) {
    let iterationCounter;

    do {
      iterationCounter = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const current = this[i];

        if (compareFunction(prev, current) > 0) {
          iterationCounter++;
          this[i - 1] = current;
          this[i] = prev;
        }
      }
    } while (iterationCounter > 0);

    return this;
  };

  function compareAsStrings(prevValue, nextValue) {
    const prevString = String(prevValue);
    const nextString = String(nextValue);

    if (prevString === nextString) {
      return 0;
    }

    return prevString > nextString ? 1 : -1;
  }
}

module.exports = applyCustomSort;
