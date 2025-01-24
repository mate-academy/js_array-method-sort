'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    let comparator = compareFunction;

    if (typeof comparator !== 'function') {
      comparator = (a, b) => {
        const aString = String(a);
        const bString = String(b);

        if (aString > bString) {
          return 1;
        }

        if (aString < bString) {
          return -1;
        }

        return 0;
      };
    }

    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - i - 1; j++) {
        if (comparator(this[j], this[j + 1]) > 0) {
          [this[j], this[j + 1]] = [this[j + 1], this[j]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
