'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const asStringsCompare = (a, b) => {
    const currentItem = String(a);
    const nextItem = String(b);

    if (currentItem > nextItem) {
      return 1;
    } else if (nextItem === currentItem) {
      return 0;
    } else {
      return -1;
    }
  };

  [].__proto__.sort2 = function(compareFunction = asStringsCompare) {
    let count = 0;

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
