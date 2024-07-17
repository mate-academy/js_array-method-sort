'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 1; j < this.length; j++) {
        const compareFunc = compareFunction
          ? compareFunction(this[j - 1], this[j]) > 0
          : String(this[j - 1]) > String(this[j]);

        if (compareFunc) {
          const temp = this[j - 1];

          this[j - 1] = this[j];
          this[j] = temp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
