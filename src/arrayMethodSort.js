'use strict';

/**
 * Implement method Sort
 */

function compareDefault(previousItem, currentItem) {
  const firstItem = previousItem.toString();
  const secondItem = currentItem.toString();

  return firstItem > secondItem
    ? 1
    : firstItem === secondItem
      ? 0
      : -1;
}

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareDefault) {
    let sortCounter;

    do {
      sortCounter = 0;

      for (let i = 1; i < this.length; i++) {
        const previousValue = this[i - 1];
        const currentValue = this[i];

        if (compareFunction(previousValue, currentValue) > 0) {
          sortCounter++;
          this[i - 1] = currentValue;
          this[i] = previousValue;
        }
      }
    } while (sortCounter > 0);

    return this;
  };
}

module.exports = applyCustomSort;
