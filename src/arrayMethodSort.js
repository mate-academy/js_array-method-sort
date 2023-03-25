'use strict';

/**
 * Implement method Sort
 */
const compareAsString = (firstItem, secondItem) => {
  const firstString = String(firstItem);
  const secondString = String(secondItem);

  if (firstString > secondString) {
    return 1;
  }

  if (firstString === secondString) {
    return 0;
  }

  return -1;
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsString) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const previous = this[i - 1];
        const current = this[i];

        if (compareFunction(previous, current) > 0) {
          this[i - 1] = current;
          this[i] = previous;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
