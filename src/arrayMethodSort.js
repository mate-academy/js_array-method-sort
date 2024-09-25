/* eslint-disable no-param-reassign */
'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    if (compareFunction === undefined) {
      compareFunction = (a, b) => {
        const isStringA = typeof a === 'string';
        const isStringB = typeof b === 'string';

        if (isStringA && isStringB) {
          const isUpperA = a[0] === a[0].toUpperCase();
          const isUpperB = b[0] === b[0].toUpperCase();

          if (isUpperA && !isUpperB) {
            return -1;
          }

          if (!isUpperA && isUpperB) {
            return 1;
          }
        }

        return String(a).localeCompare(String(b));
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
