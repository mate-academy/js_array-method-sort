'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (
    compareFunction = (a, b) => (String(a) > String(b) ? 1 : -1),
  ) {
    for (let firstIndex = 1; firstIndex < this.length; firstIndex++) {
      const firstValue = this.splice(firstIndex, 1)[0];
      let found = false;

      for (let secondIndex = firstIndex - 1; secondIndex >= 0; secondIndex--) {
        const secondValue = this[secondIndex];
        const valuesToCompare = [secondValue, firstValue];

        if (compareFunction(...valuesToCompare) <= 0) {
          found = true;
          this.splice(secondIndex + 1, 0, firstValue);
          break;
        }

        if (found) {
          break;
        }
      }

      if (!found) {
        this.splice(0, 0, firstValue);
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
