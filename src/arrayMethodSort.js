/* eslint-disable no-param-reassign */
'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  function compareAsString(a, b) {
    a = String(a);
    b = String(b);

    if (a > b) {
      return 1;
    }

    if (a < b) {
      return -1;
    }

    return 0;
  }

  [].__proto__.sort2 = function (compareFunction = compareAsString) {
    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - 1 - i; j++) {
        const a = this[j];
        const b = this[j + 1];

        if (compareFunction(a, b) > 0) {
          this[j] = b;
          this[j + 1] = a;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
