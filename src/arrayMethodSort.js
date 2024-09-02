'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    let switcher = true;

    while (switcher) {
      switcher = false;

      for (let i = 0; i < this.length - 1; i++) {
        const firstValue = this[i];
        const secondValue = this[i + 1];
        const compareString = (a, b) => (String(a) > String(b) ? 1 : -1);

        const callback =
          compareFunction === undefined
            ? compareString(firstValue, secondValue)
            : compareFunction(firstValue, secondValue);

        if (callback > 0) {
          this[i] = secondValue;
          this[i + 1] = firstValue;
          switcher = true;
          break;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
