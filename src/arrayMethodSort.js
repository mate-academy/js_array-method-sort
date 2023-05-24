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
    let swapped;

    for (let i = 0; i < this.length - 1; i++) {
      swapped = false;

      for (let j = 0; j < this.length - i - 1; j++) {
        const currentItem = this[j];
        const nextItem = this[j + 1];
        const itemsComparetion = compareFunction(nextItem, currentItem);

        if (itemsComparetion < 0) {
          this[j] = nextItem;
          this[j + 1] = currentItem;
          swapped = true;
        }
      }

      if (swapped === false) {
        break;
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
