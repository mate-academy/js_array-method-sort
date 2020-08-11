'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(callback = (a, b) =>
    a.toString() > b.toString()) {
    let counter;

    do {
      counter = 0;

      for (let i = 0; i < this.length - 1; i++) {
        const cur = this[i];
        const next = this[i + 1];

        if (callback(cur, next) > 0) {
          counter++;
          this[i + 1] = cur;
          this[i] = next;
        }
      }
    } while (counter > 0);

    return this;
  };
}

module.exports = applyCustomSort;
