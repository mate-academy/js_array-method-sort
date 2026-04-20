'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    let newCompareFunction = compareFunction;

    if (typeof compareFunction !== 'function') {
      newCompareFunction = (a, b) => {
        const aStr = String(a);
        const bStr = String(b);

        if (aStr > bStr) {
          return 1;
        }

        if (aStr < bStr) {
          return -1;
        }

        return 0;
      };
    }

    let swapped;

    do {
      swapped = false;

      for (let index = 0; index < this.length - 1; index++) {
        const compareResult = newCompareFunction(this[index], this[index + 1]);

        if (compareResult > 0) {
          const temp = this[index];

          this[index] = this[index + 1];
          this[index + 1] = temp;

          swapped = true;
        }
      }
    } while (swapped);

    return this;
  };
}

module.exports = applyCustomSort;
