'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    // write code here
    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - 1 - i; j++) {
        let result;

        if (compareFunction === undefined) {
          result = this[j].toString() > this[j + 1].toString() ? 1 : 0;
        } else {
          result = compareFunction(this[j], this[j + 1]);
        }

        if (result > 0) {
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
