'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    let cmp;

    if (typeof compareFunction === 'function') {
      cmp = compareFunction;
    } else {
      cmp = function (a, b) {
        const strA = String(a);
        const strB = String(b);

        if (strA > strB) {
          return 1;
        }

        if (strA < strB) {
          return -1;
        }

        return 0;
      };
    }

    let temp;

    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - i - 1; j++) {
        if (cmp(this[j], this[j + 1]) > 0) {
          temp = this[j];
          this[j] = this[j + 1];
          this[j + 1] = temp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
