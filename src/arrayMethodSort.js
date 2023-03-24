'use strict';

/**
 * Implement method Sort
 */
function defaultSort(firstItem, secondItem) {
  const previousItem = String(secondItem);
  const currentItem = String(firstItem);

  if (currentItem < previousItem) {
    return -1;
  }
}

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = defaultSort) {
    let countOfSwaps = 1;

    while (countOfSwaps !== 0) {
      for (let i = 1; i < this.length; i++) {
        const previousItem = this[i - 1];
        const currentItem = this[i];

        if (compareFunction(currentItem, previousItem) < 0) {
          countOfSwaps++;
          this[i] = previousItem;
          this[i - 1] = currentItem;
          continue;
        };
      }
      countOfSwaps--;
    }

    return this;
  };
}

module.exports = applyCustomSort;
