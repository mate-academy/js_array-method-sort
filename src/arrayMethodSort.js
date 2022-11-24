'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let count;
    let current;
    let prev;

    if (!compareFunction) {
      do {
        count = 0;

        for (let i = 1; i < this.length; i++) {
          current = this[i];
          prev = this[i - 1];

          if (current.toString().localeCompare(prev.toString()) < 0) {
            this[i] = prev;
            this[i - 1] = current;
            count++;
          }
        }
      } while (count > 0);
    } else {
      do {
        count = 0;

        for (let i = 1; i < this.length; i++) {
          current = this[i];
          prev = this[i - 1];

          if (compareFunction(current, prev) < 0) {
            this[i] = prev;
            this[i - 1] = current;
            count++;
          }
        }
      } while (count > 0);
    }

    return this;
  };
}

module.exports = applyCustomSort;
