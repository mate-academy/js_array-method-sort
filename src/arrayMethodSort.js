'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const defaultCompare = (firstElement, secondElement, compareFn) => {
      if (compareFunction) {
        return compareFn(firstElement, secondElement) > 0;
      }

      return String(firstElement) > String(secondElement);
    };

    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        const swapCheck = defaultCompare(this[i], this[j], compareFunction);

        if (swapCheck) {
          const swapValue = this[i];

          this[i] = this[j];
          this[j] = swapValue;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
