'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    let callback = compareFunction;

    if (callback === undefined) {
      callback = function (a, b) {
        const firstValue = String(a);
        const secondValue = String(b);

        return firstValue > secondValue;
      };
    }

    for (let j = 0; j < this.length; j++) {
      let swapCounter = 0;

      for (let i = 0; i < this.length - 1; i++) {
        const compare = callback(this[i], this[i + 1]);

        const shouldSwap = typeof compare === 'number' ? compare > 0 : compare;

        if (shouldSwap) {
          swapCounter++;

          const temp = this[i];

          this[i] = this[i + 1];
          this[i + 1] = temp;
        }
      }

      if (swapCounter === 0) {
        return this;
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
