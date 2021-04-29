'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = (t, u) => {
    const c1 = t.toString();
    const c2 = u.toString();

    return c1 > c2 ? 1 : (c1 < c2) ? -1 : 0;
  }) {
    let count = 0;

    do {
      count = 0;

      for (let j = 1; j < this.length; j++) {
        const temp = this[j - 1];

        if (compareFunction(this[j - 1], this[j]) > 0) {
          this[j - 1] = this[j];
          this[j] = temp;
          count++;
        }
      }
    } while (count);

    return this;
  };
}

module.exports = applyCustomSort;
