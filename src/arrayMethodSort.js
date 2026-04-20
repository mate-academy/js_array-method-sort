'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    let switcher = true;
    const compareString = (a, b) => (String(a) > String(b) ? 1 : -1);

    while (switcher) {
      switcher = false;

      for (let i = 0; i < this.length - 1; i++) {
        const firstValue = this[i];
        const secondValue = this[i + 1];

        const comparisonResult =
          compareFunction === undefined
            ? compareString(firstValue, secondValue)
            : compareFunction(firstValue, secondValue);

        if (comparisonResult > 0) {
          this[i] = secondValue;
          this[i + 1] = firstValue;
          switcher = true;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
