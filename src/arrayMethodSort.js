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
      for (let i = 0; i < this.length - 1; i++) {
        const compare = callback(this[i], this[i + 1]);

        const shouldSwap =
          typeof compare === 'number' ? compare > 0 : compare === true;

        if (shouldSwap) {
          const temp = this[i];

          this[i] = this[i + 1];
          this[i + 1] = temp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
