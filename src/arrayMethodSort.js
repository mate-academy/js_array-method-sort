'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(
    compareFunction = (a, b) => a.toString() > b.toString()
  ) {
    let wasChange = false;

    do {
      wasChange = false;

      for (let i = 0; i < this.length - 1; i++) {
        const first = this[i];
        const second = this[i + 1];

        if (compareFunction(first, second) > 0) {
          this[i] = second;
          this[i + 1] = first;
          wasChange = true;
        }
      }
    } while (wasChange);

    return this;
  };
}

module.exports = applyCustomSort;
