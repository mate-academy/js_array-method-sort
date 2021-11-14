'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = defaultComparison) {
    let countChanges;

    do {
      countChanges = 0;

      for (let i = 1; i < this.length; i++) {
        const previousElement = this[i - 1];
        const currentElement = this[i];

        if (compareFunction(previousElement, currentElement) > 0) {
          this[i - 1] = currentElement;
          this[i] = previousElement;
          countChanges++;
        }
      }
    } while (countChanges > 0);

    return this;
  };
}

const defaultComparison = function(firstElement, secondElement) {
  const elementOne = String(firstElement);
  const elementTwo = String(secondElement);

  if (elementOne > elementTwo) {
    return 1;
  } else if (elementOne < elementTwo) {
    return -1;
  } else {
    return 0;
  }
};

module.exports = applyCustomSort;
