'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    // write code here
    const defaultCompare = (el1, el2) => {
      const itemOne = `${el1}`;
      const itemTwo = `${el2}`;

      return itemOne > itemTwo ? +1 : -1;
    };

    const comparer = arguments.length === 0 ? defaultCompare : compareFunction;

    for (let i = 0; i < this.length; i++) {
      for (let n = i + 1; n < this.length; n++) {
        if (comparer(this[i], this[n]) > 0) {
          const buffer = this[i];

          this[i] = this[n];
          this[n] = buffer;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
