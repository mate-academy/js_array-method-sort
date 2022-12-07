'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const compareAsStrings = (a, b) => {
    switch (true) {
      case String(a) > String(b):
        return 1;

      case String(a) < String(b):
        return -1;

      default:
        return 0;
    }
  };

  [].__proto__.sort2 = function(compareFunction = compareAsStrings) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const current = this[i];

        if (compareFunction(prev, current) > 0) {
          this[i - 1] = current;
          this[i] = prev;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
