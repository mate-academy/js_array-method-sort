'use strict';

/**
 * Implement method Sort
 */
const callback = (a, b) => a.toString() > b.toString();

function applyCustomSort() {
  [].__proto__.sort2 = function(customSort = callback) {
    // write code here
    let count;

    do {
      count = 0;

      for (let i = 0; i < this.length - 1; i++) {
        const current = this[i];
        const next = this[i + 1];

        if (customSort(current, next) > 0) {
          count++;
          this[i + 1] = current;
          this[i] = next;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
