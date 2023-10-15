'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction = (a, b) => `${a}` > `${b}`) {
    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - i - 1; j++) {
        let currentElement = this[j];
        let nextElement = this[j + 1];

        if (compareFunction(currentElement, nextElement) > 0) {
          this[j] = nextElement;
          this[j + 1] = currentElement;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
