'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    // write code here

    const compare =
      compareFunction ||
      ((ax, bx) => {
        const a = '' + ax;
        const b = '' + bx;

        return a > b ? 1 : a < b ? -1 : 0;
      });

    let modified;

    do {
      modified = false;

      for (let i = 0; i < this.length - 1; i++) {
        const a = this[i];
        const b = this[i + 1];

        if (compare(a, b) > 0) {
          this[i] = b;
          this[i + 1] = a;
          modified = true;
        }
      }
    } while (modified);

    return this;
  };
}

module.exports = applyCustomSort;
