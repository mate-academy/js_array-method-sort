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
    } else if (stringA === stringB) {
      return 0;
    } else {
      return -1;
    }
  };

  [].__proto__.sort2 = function(compareFunction = defaultSorting) {
    let isChanged;

    do {
      isChanged = false;

      for (let i = 1; i < this.length; i++) {
        const previousValue = this[i - 1];
        const currentValue = this[i];

        if (compareFunction(previousValue, currentValue) > 0) {
          this[i] = previousValue;
          this[i - 1] = currentValue;
          isChanged = true;
        }
      }
    } while (isChanged === true);

    return this;
  };
}

module.exports = applyCustomSort;
