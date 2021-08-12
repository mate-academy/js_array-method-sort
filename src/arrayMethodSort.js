'use strict';

/**
 * Implement method Sort
 */
const compearAsStrings = (a, b) => {
  const firstString = String(a);
  const secondString = String(b);

  if (firstString > secondString) {
    return 1;
  }

  if (firstString < secondString) {
    return -1;
  }

  return 0;
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compearAsStrings) {
    // write code here
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const oldItem = this[i - 1];
        const newItem = this[i];

        if (compareFunction(oldItem, newItem) > 0) {
          this[i - 1] = newItem;
          this[i] = oldItem;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
