'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    // write code here
    const defaultCompare = (el1, el2) => {
      if (el1 === el2) {
        return 0;
      } else {
        const itemOne = `${el1}`;
        const itemTwo = `${el2}`;

        return itemOne > itemTwo ? +1 : -1;
      }
    };

    const comparer = compareFunction || defaultCompare;

    for (let i = 0; i < this.length; i++) {
      for (let n = i + 1; n < this.length; n++) {
        if (comparer(this[i], this[n]) > 0) {
          [this[i], this[n]] = [this[n], this[i]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
