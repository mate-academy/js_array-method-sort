'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(
    compareFunction = (el1, el2) =>
      String(el1) > String(el2) ? 1 : 0
  ) {
    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (compareFunction(this[i], this[j]) > 0) {
          const temporary = this[i];

          this[i] = this[j];
          this[j] = temporary;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
