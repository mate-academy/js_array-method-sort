'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compare) {
    // write code here
    let check;

    do {
      check = false;

      for (let i = 1; i < this.length; i++) {
        if (compareFunction(this[i - 1], this[i]) >= 1) {
          const previous = this[i - 1];

          this[i - 1] = this[i];
          this[i] = previous;
          check = true;
        }
      }
    } while (check);

    return this;
  };

  function compare(a, b) {
    if (String(a) > String(b)) {
      return 1;
    }

    if (String(a) < String(b)) {
      return -1;
    }

    return 0;
  }
}

module.exports = applyCustomSort;
