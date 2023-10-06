'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const defaultCompare = (a, b) => `${a}` < `${b}` ? -1 : 1;

  [].__proto__.sort2 = function(compareFunction = defaultCompare) {
    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        const res = compareFunction(this[i], this[j]);

        if (res > 0) {
          const val = this[j];

          this[j] = this[i];
          this[i] = val;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
