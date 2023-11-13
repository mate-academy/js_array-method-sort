'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = (a, b) =>
    (String(a) > String(b) ? 1 : -1)) {
    let swapped;

    do {
      swapped = false;

      for (let i = 1; i < this.length; i++) {
        const current = this[i];
        const previous = this[i - 1];
        const comparisonResult
        = compareFunction(String(previous), String(current));

        if (comparisonResult > 0) {
          this[i] = previous;
          this[i - 1] = current;
          swapped = true;
        }
      }
    } while (swapped);

    return this;
  };
}

module.exports = applyCustomSort;
