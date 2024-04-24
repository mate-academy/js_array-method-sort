'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const defaultSort = [].sort;

  [].__proto__.sort2 = function (compareFunction) {
    if (compareFunction) {
      return defaultSort.call(this, compareFunction);
    } else {
      for (let i = 0; i < this.length - 1; i++) {
        for (let j = 0; j < this.length - i - 1; j++) {
          if (String(this[j]) > String(this[j + 1])) {
            const temp = this[j];

            this[j] = this[j + 1];
            this[j + 1] = temp;
          }
        }
      }

      return this;
    }
  };
}

module.exports = applyCustomSort;
