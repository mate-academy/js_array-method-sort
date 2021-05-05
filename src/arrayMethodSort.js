'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(
    compareFunction = (a, b) => a.toString() > b.toString()
  ) {
    let isChanged = false;

    do {
      isChanged = false;

      for (let i = 0; i < this.length - 1; i++) {
        const x = this[i];
        const y = this[i + 1];

        if (compareFunction(x, y) > 0) {
          this[i] = y;
          this[i + 1] = x;
          isChanged = true;
        }
      }
    } while (isChanged);

    return this;
  };
}

module.exports = applyCustomSort;
