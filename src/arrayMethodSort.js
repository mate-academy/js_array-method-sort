'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const compareByDefault = (a, b) => String(a) <= String(b) ? 0 : 1;

  [].__proto__.sort2 = function(compareFunction = compareByDefault) {
    let shift = 0;

    for (let j = 0; j < this.length; j++) {
      for (let i = 0; i < this.length - 1 - shift; i++) {
        const compareResult = compareFunction(this[i], this[i + 1]);

        if (compareResult > 0) {
          [this[i], this[i + 1]] = [this[i + 1], this[i]];
        }
      }

      shift++;
    }

    return this;
  };
}

module.exports = applyCustomSort;
