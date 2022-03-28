'use strict';

/**
 * Implement method Sort
 */

const compareAsStrings = (a, b) => {
  const stringA = a.toString();
  const stringB = b.toString();

  if (stringA > stringB) {
    return 1;
  } else if (stringA < stringB) {
    return -1;
  } else {
    return 0;
  }
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsStrings) {
    let count;

    do {
      count = 0;

      for (let i = 0; i < this.length - 1; i++) {
        const currentItem = this[i];
        const nextItem = this[i + 1];

        if (compareFunction(this[i], this[i + 1]) > 0) {
          this[i + 1] = currentItem;
          this[i] = nextItem;
          count++;
        } else {
          continue;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
