'use strict';

/**
 * Implement method Sort
 */

function compareAsString(a, b) {
  const stringA = String(a);
  const stringB = String(b);

  if (stringA > stringB) {
    return 1;
  }

  if (stringA === stringB) {
    return 0;
  }

  return -1;
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsString) {
    let previousItem;
    let currentItem;
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        previousItem = this[i - 1];
        currentItem = this[i];

        if (compareFunction(previousItem, currentItem) > 0) {
          this[i - 1] = currentItem;
          this[i] = previousItem;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
