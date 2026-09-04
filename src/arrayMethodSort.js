'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const fn =
      compareFunction ||
      ((a, b) => (String(a) > String(b) ? 1 : String(a) < String(b) ? -1 : 0));

    for (let j = 0; j < this.length; j++) {
      for (let i = 0; i < this.length - 1; i++) {
        const compareElements = fn(this[i], this[i + 1]);

        if (compareElements > 0) {
          const temp = this[i];

          this[i] = this[i + 1];
          this[i + 1] = temp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
