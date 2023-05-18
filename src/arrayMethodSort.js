'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const stringCompare = (itemA, itemB) => itemA.toString() > itemB.toString();

    const callback = compareFunction || stringCompare;

    let changes;

    do {
      changes = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const current = this[i];

        if (callback(prev, current) > 0) {
          changes++;
          this[i - 1] = current;
          this[i] = prev;
        }
      }
    } while (changes > 0);

    return this;
  };
}

module.exports = applyCustomSort;
