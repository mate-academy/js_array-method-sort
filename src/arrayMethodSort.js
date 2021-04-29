'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = (t, u) => {
    const c1 = t.toString();
    const c2 = u.toString();

    if (c1 > c2) {
      return 1;
    }

    if (c1 < c2) {
      return -1;
    }

    return 0;
  }) {
    let count = 0;

    do {
      count = 0;

      for (let j = 0; j < this.length; j++) {
        if (compareFunction(this[j], this[j + 1]) > 0) {
          const temp = this[j];

          this[j] = this[j + 1];
          this[j + 1] = temp;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
