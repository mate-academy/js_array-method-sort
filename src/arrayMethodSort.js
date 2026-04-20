'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (
    compareFunction = (a, b) => (a + '' >= b + '' ? 1 : -1) || 0,
  ) {
    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (compareFunction(this[i], this[j]) > 0) {
          const temp = this[i];

          this[i] = this[j];
          this[j] = temp;
        }
      }
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined) {
        delete this[i];
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
