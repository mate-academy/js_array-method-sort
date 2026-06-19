'use strict';

const defaultCompareFunction = (a, b) => {
  return String(a) > String(b);
};

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = defaultCompareFunction) {
    let end = this.length;

    while (end > 1) {
      for (let i = 1; i < end; i++) {
        if (compareFunction(this[i - 1], this[i]) > 0) {
          const temp = this[i - 1];

          this[i - 1] = this[i];
          this[i] = temp;
        }
      }

      end--;
    }

    return this;
  };
}

module.exports = applyCustomSort;
