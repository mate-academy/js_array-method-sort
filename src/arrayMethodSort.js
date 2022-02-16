'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const compareAsStrings = (a, b) => {
    const stringA = String(a);
    const stringB = String(b);

    if (stringA > stringB) {
      return 1;
    } else if (stringA < stringB) {
      return 0;
    } else {
      return -1;
    }
  };

  [].__proto__.sort2 = function(compareFunction = compareAsStrings) {
    let changesCount;

    do {
      changesCount = 0;

      for (let i = 1; i < this.length; i++) {
        const prevItem = this[i - 1];
        const currentItem = this[i];

        if (compareFunction(prevItem, currentItem) > 0) {
          changesCount++;
          this[i - 1] = currentItem;
          this[i] = prevItem;
        }
      }
    } while (changesCount > 0);

    return this;
  };
}

module.exports = applyCustomSort;
