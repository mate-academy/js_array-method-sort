'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    // write code here
    let defaultCompare;

    if (typeof compareFunction === 'function') {
      defaultCompare = compareFunction;
    } else {
      defaultCompare = function (a, b) {
        const strA = String(a);
        const strB = String(b);

        if (strA[0] === strB[0]) {
          return strA.localeCompare(strB);
        } else {
          return strA[0].charCodeAt(0) - strB[0].charCodeAt(0);
        }
      };
    }

    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - i - 1; j++) {
        if (defaultCompare(this[j], this[j + 1]) > 0) {
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
