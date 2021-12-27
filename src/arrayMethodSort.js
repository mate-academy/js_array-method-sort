'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let worked = 0;
    let callback = compareFunction;

    if (callback === undefined) {
      callback = defaultCompare;
    }

    do {
      worked = 0;

      for (let i = 1; i < this.length; i++) {
        if (callback(this[i], this[i - 1]) < 0) {
          const a = this[i];

          this[i] = this[i - 1];
          this[i - 1] = a;

          worked++;
        }
      }
    } while (worked > 0);

    return this;

    function defaultCompare(a, b) {
      const x = String(a);
      const y = String(b);

      if (x > y) {
        return 1;
      }

      if (x < y) {
        return -1;
      }

      return 0;
    }
  };
}

module.exports = applyCustomSort;
