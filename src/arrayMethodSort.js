'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (
    compareFunction = (a, b) => {
      const sa = a.toString();
      const sb = b.toString();

      if (sa < sb) {
        return -1;
      }

      if (sa > sb) {
        return 1;
      }

      return 0;
    },
  ) {
    // write code here

    if (this.length < 2) {
      return this;
    }

    let sorted = true;

    do {
      sorted = true;

      for (let i = 1; i < this.length; i++) {
        if (compareFunction(this[i - 1], this[i]) > 0) {
          sorted = false;

          const t = this[i - 1];

          this[i - 1] = this[i];
          this[i] = t;
        }
      }
    } while (!sorted);

    return this;
  };
}

module.exports = applyCustomSort;
