'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction = defaultSort) {
    let wasSwapped;

    do {
      wasSwapped = false;

      for (let i = 0; i < this.length - 1; i++) {
        if (compareFunction(this[i], this[i + 1]) > 0) {
          [this[i], this[i + 1]] = [this[i + 1], this[i]];
          wasSwapped = true;
        }
      }
    } while (wasSwapped);

    return this;
  };

  const defaultSort = (a, b) => String(a) > (String(b));
}

module.exports = applyCustomSort;
