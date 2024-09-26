'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(
    compareFunction = (a, b) => (a.toString() > b.toString())) {
    let swaps = 0;

    do {
      for (let i = 0; i < this.length - 1; i++) {
        if (i === 0) {
          swaps = 0;
        }

        const ratio = compareFunction(this[i], this[i + 1]);

        if (ratio > 0) {
          const tmp = this[i];

          this[i] = this[i + 1];
          this[i + 1] = tmp;

          swaps++;
        }
      }
    } while (swaps > 0);

    return this;
  };
}

module.exports = applyCustomSort;
