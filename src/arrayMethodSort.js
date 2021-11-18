'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let result = 0;
    let first, next;
    let count = 0;

    if (compareFunction === undefined) {
      do {
        count = 0;

        for (let i = 0; i < this.length - 1; i++) {
          if (String(this[i]) > String(this[i + 1])) {
            count++;
            next = this[i];
            first = this[i + 1];
            this[i] = first;
            this[i + 1] = next;
          }
        }
      } while (count > 0);
    } else {
      do {
        count = 0;

        for (let i = 0; i < this.length; i++) {
          result = compareFunction(this[i], this[i + 1]);

          if (result > 0) {
            count++;
            next = this[i];
            first = this[i + 1];
            this[i] = first;
            this[i + 1] = next;
          }
        }
      } while (count > 0);
    }

    return this;
  };
}
module.exports = applyCustomSort;
