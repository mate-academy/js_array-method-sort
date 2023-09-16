'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = (a, b) => `${a}` > `${b}`) {
    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        const currentElement = this[i];
        const previousElement = this[j];

        if (compareFunction(currentElement, previousElement) > 0) {
          this[i] = previousElement;
          this[j] = currentElement;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
