'use strict';

/*
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction = undefined) {
    const newArr = this.toSorted(compareFunction);

    for (let i = 0; i < this.length; i++) {
      this[i] = newArr[i];
    }

    return this;
  };
}

module.exports = applyCustomSort;
