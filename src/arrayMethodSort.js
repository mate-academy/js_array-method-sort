'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (
    compareFunction = (a, b) => {
      if (a + '' < b + '') {
        return -1;
      }

      return 1;
    },
  ) {
    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length; j++) {
        if (i !== j && compareFunction(this[i], this[j]) < 0) {
          const temp = this[j];

          this[j] = this[i];
          this[i] = temp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
