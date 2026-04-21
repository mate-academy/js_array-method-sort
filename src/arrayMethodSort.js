'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const compare =
      compareFunction ||
      function (a, b) {
        switch (true) {
          case String(a) > String(b):
            return 1;

          case String(a) < String(b):
            return -1;

          default:
            return 0;
        }
      };

    for (let i = 0; i < this.length; i++) {
      for (let n = 0; n < this.length - 1 - i; n++) {
        if (compare(this[n], this[n + 1]) > 0) {
          const temp = this[n];

          this[n] = this[n + 1];
          this[n + 1] = temp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
