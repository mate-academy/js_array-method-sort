'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (
    compareFunction = (a, b) => (a.toString() >= b.toString() ? 1 : -1),
  ) {
    const cmp =
      compareFunction || ((a, b) => String(a).localeCompare(String(b)));

    if (typeof cmp !== 'function') {
      throw new Error('cmp повинен бути функцією');
    }

    for (let j = 0; j < this.length; j++) {
      for (let i = 0; i < this.length - 1; i++) {
        const cmpRes = cmp(this[i], this[i + 1]);

        if (cmpRes > 0) {
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
