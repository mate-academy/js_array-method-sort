'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const defaultCompareFunc = (a, b) => String(a) > String(b) ? 1 : -1;
    let difference;

    for (let index = 0; index < this.length; index++) {
      for (let nextIndex = index; nextIndex < this.length; nextIndex++) {
        if (compareFunction === undefined) {
          difference = defaultCompareFunc(this[index], this[nextIndex]);
        } else {
          difference = compareFunction(this[index], this[nextIndex]);
        }

        if (difference > 0) {
          const temp = this[index];

          this[index] = this[nextIndex];
          this[nextIndex] = temp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
