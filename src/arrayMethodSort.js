'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsStrings) {
    let shiftCount;

    do {
      shiftCount = 0;

      for (let i = 1; i < this.length; i++) {
        if (compareFunction(this[i - 1], this[i]) > 0) {
          const prevItem = this[i - 1];
          const currentItem = this[i];

          this[i - 1] = currentItem;
          this[i] = prevItem;
          shiftCount++;
        }
      }
    } while (shiftCount > 0);

    return this;
  };
}

const compareAsStrings = function(a, b) {
  const stringA = a.toString();
  const stringB = b.toString();

  if (stringA > stringB) {
    return 1;
  }

  if (stringA === stringB) {
    return 0;
  }

  return -1;
};

module.exports = applyCustomSort;
