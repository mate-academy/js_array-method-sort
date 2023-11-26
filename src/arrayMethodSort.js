'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - 1 - i; j++) {
        const current = compareFunction ? this[j] : String(this[j]);
        const next = compareFunction ? this[j + 1] : String(this[j + 1]);

        if (
          compareFunction ? compareFunction(current, next) > 0 : current > next
        ) {
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
