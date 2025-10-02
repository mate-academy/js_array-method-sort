'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    let cmp = compareFunction;

    if (!compareFunction) {
      cmp = (a, b) => {
        const sa = String(a);
        const sb = String(b);

        if (sa === sb) {
          return 0;
        }

        return sa > sb ? 1 : -1;
      };
    }

    if (
      compareFunction !== undefined &&
      typeof compareFunction !== 'function'
    ) {
      throw new TypeError('The comparison function must be a function');
    }

    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - 1 - i; j++) {
        const curr = this[j];

        if (cmp(this[j], this[j + 1]) > 0) {
          this[j] = this[j + 1];
          this[j + 1] = curr;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
