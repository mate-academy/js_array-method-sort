'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    let iterationCounter = 0;

    while (iterationCounter < this.length) {
      for (let index = 0; index < this.length - 1; index++) {
        const valueA = this[index];
        const valueB = this[index + 1];
        let isSwap;

        if (compareFunction === undefined) {
          isSwap = '' + valueA > '' + valueB;
        } else if (compareFunction(valueA, valueB) > 0) {
          isSwap = true;
        }

        if (isSwap) {
          this[index] = valueB;
          this[index + 1] = valueA;
        }
      }
      iterationCounter++;
    }

    return this;
  };
}

module.exports = applyCustomSort;
