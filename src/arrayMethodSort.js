'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let step;
    let callback = compareFunction;

    if (!compareFunction) {
      callback = function(curr, prev) {
        return String(curr) < String(prev) ? -1 : 1;
      };
    }

    do {
      step = 0;

      for (let i = 1; i < this.length; i++) {
        const curr = this[i];
        const prev = this[i - 1];

        if (callback(curr, prev) < 0) {
          this[i - 1] = curr;
          this[i] = prev;
          step++;
        }
      }
    } while (step > 0);

    return this;
  };
}

module.exports = applyCustomSort;
