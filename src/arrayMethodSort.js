'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const compareStrings = (firstElement, secondElement) => {
    return String(firstElement) > String(secondElement)
      ? 1
      : 0;
  };

  [].__proto__.sort2 = function(compareFunction = compareStrings) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const firstElement = this[i - 1];
        const secondElement = this[i];

        if (compareFunction(firstElement, secondElement) > 0) {
          this[i - 1] = secondElement;
          this[i] = firstElement;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
};

module.exports = applyCustomSort;
