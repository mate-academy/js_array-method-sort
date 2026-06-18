'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (
    compareFunction = (a, b) => (String(a) > String(b) ? 1 : -1),
  ) {
    for (let key = 0; key < this.length; key++) {
      for (let i = key + 1; i < this.length; i++) {
        const firstIndex = this[key];
        const secondIndex = this[i];

        if (compareFunction(firstIndex, secondIndex) > 0) {
          this[i] = firstIndex;
          this[key] = secondIndex;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
