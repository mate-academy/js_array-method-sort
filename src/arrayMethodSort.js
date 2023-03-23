'use strict';

/**
 * Implement method Sort
 */
function defaultSort(a, b) {
  const compareParams = String(a) > String(b);

  if (compareParams) {
    return 1;
  }

  if (!compareParams) {
    return -1;
  }

  return 0;
}

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = defaultSort) {
    let sortCounter;

    do {
      sortCounter = 0;

      for (let i = 1; i < this.length; i++) {
        const previousElement = this[i - 1];
        const currentElement = this[i];

        if (compareFunction(previousElement, currentElement) > 0) {
          this[i] = previousElement;
          this[i - 1] = currentElement;
          sortCounter++;
        }
      }
    } while (sortCounter > 0);

    return this;
  };
}

module.exports = applyCustomSort;
