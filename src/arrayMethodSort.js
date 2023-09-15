'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (
    compareFunction = (a, b) => (String(a) > String(b) ? 1 : -1)) {

    const ARRAY_LENGTH = this.length;

    for (let i = 0; i < ARRAY_LENGTH; i++) {
      for (let j = 0; j < ARRAY_LENGTH - i - 1; j++) {
        if (compareFunction(this[j], this[j + 1]) > 0) {
          const temp = this[j];

          this[j] = this[j + 1];
          this[j + 1] = temp;
        }
      }
    }

    return this
  };
}

module.exports = applyCustomSort;
