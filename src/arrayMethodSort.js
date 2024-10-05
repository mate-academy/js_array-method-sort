'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const defaultCompare = (a, b) => {
      const aStr = String(a);
      const bStr = String(b);

      for (let i = 0; i < Math.max(aStr.length, bStr.length); i++) {
        const aChar = aStr.charCodeAt(i) || 0;
        const bChar = bStr.charCodeAt(i) || 0;

        if (aChar !== bChar) {
          return aChar - bChar;
        }
      }

      return 0;
    };

    const compare = compareFunction || defaultCompare;

    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - i - 1; j++) {
        const comparison = compare(this[j], this[j + 1]);

        if (comparison > 0) {
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
