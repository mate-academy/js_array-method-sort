'use strict';

/**
 * Implement method Sort
 */
const compareAsStrings = function(a, b) {
  const firstElement = String(a);
  const secondElement = String(b);

  if (firstElement > secondElement) {
    return 1;
  }

  if (secondElement > firstElement) {
    return -1;
  }

  return 0;
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsStrings) {
    let itemsSorted = 0;
    let swapCheck;

    do {
      swapCheck = false;

      for (let i = 1; i < this.length - itemsSorted; i++) {
        if (compareFunction(this[i - 1], this[i]) > 0) {
          [this[i - 1], this[i]] = [this[i], this[i - 1]];
          swapCheck = true;
        }
      }
      itemsSorted++;
    } while (swapCheck);

    return this;
  };
}

module.exports = applyCustomSort;
