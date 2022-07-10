'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(callback) {
    let compareFunction = callback;

    if (arguments.length === 0) {
      compareFunction = function(prev, curr) {
        const StringPrev = String(prev);
        const StringCurr = String(curr);

        if (StringPrev > StringCurr) {
          return 1;
        }

        if (StringPrev < StringCurr) {
          return -1;
        }

        if (StringPrev === StringCurr) {
          return 0;
        }
      };
    }

    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const curr = this[i];

        if (compareFunction(prev, curr) > 0) {
          this[i - 1] = curr;
          this[i] = prev;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
