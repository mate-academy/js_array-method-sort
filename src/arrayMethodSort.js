'use strict';

/**
 * Implement method Sort
 */
const compareByDefault = (a, b) => {
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

function applyCustomSort() {
  [].__proto__.sort2 = function(callback = compareByDefault) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const previousItem = this[i - 1];
        const currentItem = this[i];

        if (callback(previousItem, currentItem) > 0) {
          count++;
          this[i - 1] = currentItem;
          this[i] = previousItem;
        }
      }
    } while (count > 0);

    return this;
  };
};

module.exports = applyCustomSort;
