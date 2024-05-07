'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction = (a, b) => `${a}` > `${b}`) {
    for (let i = 0; i < this.length - 1; i++) {
      if (
        compareFunction(this[i], this[i + 1]) === true ||
        compareFunction(this[i], this[i + 1]) > 0
      ) {
        const temporary = this[i];

        this[i] = this[i + 1];

        this[i + 1] = temporary;

        i = -1;
      }
    }

    return this;
  };
}
applyCustomSort();

module.exports = applyCustomSort;
