'use strict';

/**
 * Implement method Sort
 */
const defaultCompareFunction = (a, b) => {
  const prev = String(a);
  const next = String(b);

  if (prev > next) {
    return 1;
  }

  if (next > prev) {
    return -1;
  }

  return 0;
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = defaultCompareFunction) {
    for (let i = this.length - 1; i >= 0; i--) {
      for (let j = 1; j <= i; j++) {
        const prev = this[j - 1];
        const current = this[j];

        if (compareFunction(prev, current) > 0) {
          this[j] = prev;
          this[j - 1] = current;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
