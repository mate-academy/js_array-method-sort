'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const curr = this[i];

        if (compareFunction) {
          if (this.every(elem => typeof elem === 'number')) {
            if (curr < prev) {
              count++;
              this[i - 1] = curr;
              this[i] = prev;
            }
          } else if (this.every(elem => typeof elem === 'string')) {
            if (curr.localeCompare(prev) === -1) {
              count++;
              this[i - 1] = curr;
              this[i] = prev;
            }
          }
        } else {
          if (curr.toString() < prev.toString()) {
            count++;
            this[i - 1] = curr;
            this[i] = prev;
          }
        }
      }
    } while (count !== 0);

    return this;
  };
}

module.exports = applyCustomSort;
