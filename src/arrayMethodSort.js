'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const compare =
      compareFunction ||
      function (a, b) {
        return String(a) > String(b) ? 1 : String(a) < String(b) ? -1 : 0;
      };

    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - 1 - i; j++) {
        const res = compare(this[j], this[j + 1]);

        if (res > 0) {
          const inter = this[j];

          this[j] = this[j + 1];
          this[j + 1] = inter;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
