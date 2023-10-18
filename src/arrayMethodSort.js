'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = defaultSort) {
    let swapped;

    do {
      swapped = false;

      for (let i = 0; i < this.length - 1; i++) {
        if (compareFunction(this[i], this[i + 1]) > 0) {
          [this[i], this[i + 1]] = [this[i + 1], this[i]];
          swapped = true;
        }
      }
    } while (swapped);

    return this;
  };

  const defaultSort = (a, b) => String(a) > String(b);
}

module.exports = applyCustomSort;
