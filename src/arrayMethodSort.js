'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareStrings) {
    let count;

    do {
      count = 0;

      for (let i = 0; i < this.length - 1; i++) {
        if (compareFunction(this[i], this[i + 1]) > 0) {
          const temp = this[i];

          this[i] = this[i + 1];
          this[i + 1] = temp;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

function compareStrings(firstItem, secondItem) {
  const firstString = String(firstItem);
  const secondString = String(secondItem);

  if (firstString > secondString) {
    return 1;
  }

  if (firstString < secondString) {
    return -1;
  }

  return 0;
}

module.exports = applyCustomSort;
