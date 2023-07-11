'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const defaultCompareFun = (a, b) => a.toString() > b.toString();

  [].__proto__.sort2 = function(compareFunction = defaultCompareFun) {
    let counter;

    do {
      counter = 0;

      for (let i = 0; i < this.length - 1; i++) {
        const a = this[i];
        const b = this[i + 1];

        if (compareFunction !== undefined && compareFunction(a, b) > 0) {
          counter++;
          this[i] = b;
          this[i + 1] = a;
        }
      }
    } while (counter > 0);

    return this;
  };
}
module.exports = applyCustomSort;
