'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const defaultSorting = (a, b) => {
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

  [].__proto__.sort2 = function (compareFunction = defaultSorting) {
    let isChanged;

    do {
      isChanged = false;

      for (let i = 1; i < this.length; i++) {
        const previousItem = this[i - 1];
        const currentItem = this[i];

        if (compareFunction(previousItem, currentItem) > 0) {
          this[i - 1] = currentItem;
          this[i] = previousItem;
          isChanged = true;
        }
      }
    } while (isChanged);

    return this;
  };
}

module.exports = applyCustomSort;
