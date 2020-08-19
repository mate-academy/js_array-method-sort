'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let forCompare = compareFunction;

    if (!forCompare) {
      forCompare = (a, b) => {
        if (String(a) > String(b)) {
          return 1;
        } else if (String(a) < String(b)) {
          return -1;
        } else {
          return 0;
        }
      };
    }

    let count;
    let currentValue = 0;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        if (forCompare(this[i - 1], this[i]) > 0) {
          currentValue = this[i];
          this[i] = this[i - 1];
          this[i - 1] = currentValue;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
