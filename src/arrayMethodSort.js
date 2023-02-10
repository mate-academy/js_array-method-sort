'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const stringSort = (a, b) => {
    const stringA = String(a);
    const stringB = String(b);

    if (stringA > stringB) {
      return 1;
    } else if (stringA === stringB) {
      return 0;
    } else {
      return -1;
    }
  };

  [].__proto__.sort2 = function(compareFunction = stringSort) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const firstItem = this[i - 1];
        const secondItem = this[i];

        if (compareFunction(firstItem, secondItem) > 0) {
          this[i - 1] = secondItem;
          this[i] = firstItem;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
