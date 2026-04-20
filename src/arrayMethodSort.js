'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareWithStrings) {
    let countChange;

    do {
      countChange = 0;

      for (let i = 1; i < this.length; i++) {
        const previousItem = this[i - 1];
        const currentItem = this[i];

        if (compareFunction(previousItem, currentItem) > 0) {
          countChange++;
          this[i - 1] = currentItem;
          this[i] = previousItem;
        }
      }
    } while (countChange > 0);

    return this;
  };

  const compareWithStrings = (a, b) => {
    const previousItem = a.toString();
    const currentItem = b.toString();

    if (previousItem > currentItem) {
      return 1;
    }

    if (previousItem < currentItem) {
      return -1;
    }

    return 0;
  };
}

module.exports = applyCustomSort;
