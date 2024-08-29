/* eslint-disable no-param-reassign */
'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    if (typeof compareFunction !== 'function') {
      compareFunction = function (a, b) {
        const strA = String(a);
        const strB = String(b);

        return strA < strB ? -1 : strA > strB ? 1 : 0;
      };
    }

    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - i - 1; j++) {
        if (compareFunction(this[j], this[j + 1]) > 0) {
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
