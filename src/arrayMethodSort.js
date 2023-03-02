'use strict';

/**
 * Implement method Sort
 */
function compareDefault(a, b) {
  const stringA = String(a);
  const stringB = String(b);

  if (stringA > stringB) {
    return 1;
  }

  if (stringA < stringB) {
    return -1;
  }

  return 0;
}

function applyCustomSort() {
  [].__proto__.sort2 = function(callback = compareDefault) {
    let swapCount;

    do {
      swapCount = 0;

      for (let i = 1; i < this.length; i++) {
        const previousItem = this[i - 1];
        const currentItem = this[i];

        if (callback(previousItem, currentItem) > 0) {
          swapCount++;
          this[i - 1] = currentItem;
          this[i] = previousItem;
        }
      }
    } while (swapCount > 0);

    return this;
  };
}

module.exports = applyCustomSort;
