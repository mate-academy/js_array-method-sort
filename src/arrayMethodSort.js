'use strict';

/**
 * Implement method Sort
 */

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsStrings) {
    let movesCounter;

    do {
      movesCounter = 0;

      for (let i = 1; i < this.length; i++) {
        const currentValue = this[i];
        const prevValue = this[i - 1];

        if (compareFunction(prevValue, currentValue) > 0) {
          this[i] = prevValue;
          this[i - 1] = currentValue;
          movesCounter++;
        }
      }
    } while (movesCounter > 0);

    return this;
  };
}

function compareAsStrings(firstValue, secondValue) {
  const firstString = String(firstValue);
  const secondString = String(secondValue);

  return firstString > secondString ? 1 : -1;
}

module.exports = applyCustomSort;
