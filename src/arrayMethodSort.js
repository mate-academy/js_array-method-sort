'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const defaultCompare = (item1, item2) => {
      const a = String(item1);
      const b = String(item2);

      if (a < b) {
        return -1;
      }

      if (a > b) {
        return 1;
      }

      return 0;
    };

    const actualCompareFunction = compareFunction || defaultCompare;

    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - i - 1; j++) {
        if (actualCompareFunction(this[j], this[j + 1]) > 0) {
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
