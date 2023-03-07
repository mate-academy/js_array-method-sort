'use strict';

/**
 * Implement method Sort
 */
const compareByDefault = (a, b) => {
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
  [].__proto__.sort2 = function(callback = compareByDefault) {
    let isContinue;

    do {
      isContinue = false;

      for (let i = 1; i < this.length; i++) {
        const previousItem = this[i - 1];
        const currentItem = this[i];

        if (callback(previousItem, currentItem) > 0) {
          isContinue = true;
          this[i - 1] = currentItem;
          this[i] = previousItem;
        }
      }
    } while (isContinue);

    return this;
  };
};

module.exports = applyCustomSort;
