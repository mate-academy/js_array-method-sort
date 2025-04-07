'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const cmp =
      typeof compareFunction === 'function'
        ? compareFunction
        : (a, b) => {
            const aStr = String(a);
            const bStr = String(b);

            const aLower = aStr.toLowerCase();
            const bLower = bStr.toLowerCase();

            if (aLower < bLower) return -1;
            if (aLower > bLower) return 1;

            // lower-cased values are equal, prioritize upper-case earlier
            const aCharCode = aStr.charCodeAt(0);
            const bCharCode = bStr.charCodeAt(0);

            if (aCharCode < bCharCode) return -1;
            if (aCharCode > bCharCode) return 1;

            return 0;
          };

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
