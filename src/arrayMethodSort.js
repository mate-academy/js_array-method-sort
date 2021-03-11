'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  function callback(a, b) {
    if (String(a) > String(b)) {
      return 1;
    }

    if (String(b) > String(a)) {
      return -1;
    }

    return 0;
  }

  [].__proto__.sort2 = function(compareFunction = callback) {
    let count;

    do {
      count = 0;

      for (let a = 1; a < this.length; a++) {
        const prev = this[a - 1];
        const current = this[a];

        if (compareFunction(this[a - 1], this[a]) > 0) {
          this[a - 1] = current;
          this[a] = prev;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
