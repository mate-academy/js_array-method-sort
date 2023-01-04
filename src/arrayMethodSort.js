'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let callback = compareFunction;
    let prev;
    let curr;
    let count;

    const defaultFunction = function(a, b) {
      const aStr = String(a);
      const bStr = String(b);

      if (aStr > bStr) {
        return 1;
      } else if (aStr === bStr) {
        return 0;
      } else {
        return -1;
      }
    };

    if (arguments.length === 0) {
      callback = defaultFunction;
    }

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        prev = this[i - 1];
        curr = this[i];

        if (callback(prev, curr) > 0) {
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
