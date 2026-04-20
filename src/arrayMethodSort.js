'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    for (let i = 0; i < this.length - 1; i++) {
      for (let x = 0; x < this.length - 1 - i; x++) {
        const a = this[x];
        const b = this[x + 1];

        const isSwapped =
          typeof compareFunction === 'function'
            ? compareFunction(a, b) > 0
            : String(a) > String(b);

        if (isSwapped) {
          const operator = this[x];

          this[x] = this[x + 1];
          this[x + 1] = operator;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
