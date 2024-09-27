'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const defaultSort = (a, b) => {
    if (a.toString() > b.toString()) {
      return 1;
    }

    if (a.toString() < b.toString()) {
      return -1;
    }

    return 0;
  };

  [].__proto__.sort2 = function(compareFunction = defaultSort) {
    let isChanged = true;

    while (isChanged) {
      isChanged = false;

      for (let i = 1; i < this.length; i++) {
        const previousElement = this[i - 1];
        const currentElement = this[i];

        if (compareFunction(previousElement, currentElement) > 0) {
          this[i - 1] = currentElement;
          this[i] = previousElement;
          isChanged = true;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
