'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const compareByDefault = (a, b) => String(a) <= String(b) ? 0 : 1;

  [].__proto__.sort2 = function(compareFunction = compareByDefault) {
    let shift = 0;
    let counter = 0;

    do {
      counter = 0;

      for (let index = 0; index < this.length - 1 - shift; index++) {
        const currentValue = this[index];
        const nextValue = this[index + 1];

        const compareResult = compareFunction(currentValue, nextValue);

        if (compareResult > 0) {
          counter++;
          [this[index], this[index + 1]] = [nextValue, currentValue];
        }
      }

      shift++;
    } while (counter > 0);

    return this;
  };
}

module.exports = applyCustomSort;
