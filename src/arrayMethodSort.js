/* eslint-disable no-param-reassign */
'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    if (typeof compareFunction !== 'function') {
      // eslint-disable-next-line no-param-reassign
      compareFunction = (a, b) => {
        a = String(a);
        b = String(b);

        if (a < b) {
          return -1;
        }

        if (a > b) {
          return 1;
        }

        return 0;
      };
    }

    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - 1 - i; j++) {
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
