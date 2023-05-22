'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(
    compareFunction = (a, b) => String(a) < String(b)
      ? -1
      : 0
  ) {
    let countChanges = 0;

    do {
      countChanges = 0;

      for (let i = 0; i < this.length - 1; i++) {
        const currentItem = this[i];
        const nextItem = this[i + 1];
        const itemsComparetion = compareFunction(nextItem, currentItem);

        if (itemsComparetion < 0) {
          this[i] = nextItem;
          this[i + 1] = currentItem;
          countChanges++;
        }
      }
    } while (countChanges > 0);

    return this;
  };
}

module.exports = applyCustomSort;
