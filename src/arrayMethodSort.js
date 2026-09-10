'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const cmp = compareFunction || function(a, b) {
      const sa = String(a);
      const sb = String(b);

      if (sa > sb) {
        return 1;
      }

      if (sa < sb){
        return -1;
      }

      return 0;
    }

    for (let i = 0;i < this.length - 1; i++) {
      for (let j = 0; j < this.length; j++) {
        if (compareFunction(this[j], this[j + 1]) > 0) {
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
