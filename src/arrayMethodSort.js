'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    if (typeof compareFunction !== 'function') {
      // eslint-disable-next-line no-param-reassign
      compareFunction = function (a, b) {
        const aStr = String(a);
        const bStr = String(b);

        if (aStr === bStr) {
          return 0;
        }

        return aStr < bStr ? -1 : 1;
      };
    }

    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - 1 - i; j++) {
        if (compareFunction(this[j], this[j + 1]) > 0) {
          [this[j], this[j + 1]] = [this[j + 1], this[j]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
