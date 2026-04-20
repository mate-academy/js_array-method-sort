'use strict';

/**
 * Implement method Sort
 * [3, 12, 2, 11]
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compare) {
    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - i - 1; j++) {
        let current;
        let next;
        let condition;

        if (compare) {
          current = this[j];
          next = this[j + 1];

          condition = compare(current, next) > 0;
        } else {
          current = String(this[j]);
          next = String(this[j + 1]);

          condition = current > next;
        }

        if (condition) {
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
