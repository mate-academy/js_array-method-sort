'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction =
  (a, b) => String(a) > String(b)) {
    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < (this.length - i - 1); j++) {
        if (this[j] + '' > this[j + 1] + '') {
          const temp = this[j];

          this[j] = this[j + 1];
          this[j + 1] = temp;
        }

        if (compareFunction(this[j], this[j + 1]) === 1
        || compareFunction(this[j], this[j + 1]) > 0) {
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
