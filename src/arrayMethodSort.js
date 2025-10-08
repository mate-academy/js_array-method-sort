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
        const strA = `${a}`;
        const strB = `${b}`;

        return strA < strB ? -1 : strA > strB ? 1 : 0;
      };
    }

    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - i - 1; j++) {
        if (cmp(this[j], this[j + 1]) > 0) {
          const temp = this[j];

          this[j] = this[j + 1];
          this[j + 1] = temp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
