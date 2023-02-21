'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    // write code here
    let a;
    let count;

    if (compareFunction === undefined) {
      do {
        count = 0;

        for (let i = 1; i < this.length; i++) {
          if (this[i].toString() < this[i - 1].toString()) {
            count++;
            a = this[i];
            this[i] = this[i - 1];
            this[i - 1] = a;
          }
        }
      } while (count > 0);
    } else if (typeof this[0] === 'number') {
      do {
        count = 0;

        for (let i = 1; i < this.length; i++) {
          if (this[i] < this[i - 1]) {
            count++;
            a = this[i];
            this[i] = this[i - 1];
            this[i - 1] = a;
          }
        }
      } while (count > 0);
    } else {
      do {
        count = 0;

        for (let i = 1; i < this.length; i++) {
          if (this[i].localeCompare(this[i - 1]) < 0) {
            count++;
            a = this[i];
            this[i] = this[i - 1];
            this[i - 1] = a;
          }
        }
      } while (count > 0);
    }

    return this;
  };
}

module.exports = applyCustomSort;
