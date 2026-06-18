'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (
    compareFunction = (a, b) => String(a) > String(b),
  ) {
    for (let i = 0; i < this.length - 1; i++) {
      if (compareFunction(this[i], this[i + 1]) > 0) {
        const currentElement = this[i];

        this[i] = this[i + 1];
        this[i + 1] = currentElement;

        i = -1;
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
