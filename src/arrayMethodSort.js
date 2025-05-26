'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    // write code here
    const defaultCompare = function (a, b) {
      const _a = String(a);
      const _b = String(b);

      if (_a < _b) {
        return -1;
      }

      if (_a > _b) {
        return 1;
      }

      return 0;
    };

    for (let i = 0; i < this.length; i++) {
      for (let j = i; j < this.length; j++) {
        const cmp =
          typeof compareFunction === 'function'
            ? compareFunction
            : defaultCompare;

        if (cmp(this[i], this[j]) > 0) {
          [this[i], this[j]] = [this[j], this[i]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
