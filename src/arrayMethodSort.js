'use strict';

/**
 * Implement method Sort
 */

function applyCustomSort() {
  const defoult = (a, b) => {
    const itemA = String(a);
    const itemB = String(b);

    return itemA > itemB ? 1 : -1;
  };

  [].__proto__.sort2 = function(compareFunction = defoult) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const current = this[i];

        if (compareFunction(prev, current) > 0) {
          count++;
          this[i - 1] = current;
          this[i] = prev;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
