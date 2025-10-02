'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    let cmp = compareFunction;

    if (!compareFunction) {
      cmp = (a, b) => {
        return String(a) > String(b) ? 1 : -1;
      };
    }

    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - 1 - i; j++) {
        const curr = this[j];

        if (cmp(this[j], this[j + 1]) > 0) {
          this[j] = this[j + 1];
          this[j + 1] = curr;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
