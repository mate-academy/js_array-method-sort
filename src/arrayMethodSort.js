'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const defaultFunction = (a, b) => {
      const aString = String(a);
      const bString = String(b);

      if (aString > bString) {
        return 1;
      }

      if (bString > aString) {
        return -1;
      }

      if (aString === bString) {
        const aLowerString = aString.toLowerCase();
        const bLowerString = bString.toLowerCase();

        if (aLowerString > bLowerString) {
          return 1;
        }

        if (aLowerString < bLowerString) {
          return -1;
        }
      }
    };
    const cmp = compareFunction || defaultFunction;

    for (let i = 0; i < this.length - 1; i++) {
      for (let y = i + 1; y < this.length; y++) {
        if (cmp(this[i], this[y]) > 0) {
          const temp = this[i];

          this[i] = this[y];
          this[y] = temp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
