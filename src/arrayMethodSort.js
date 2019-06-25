'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = (a, b) => a > b) {
    let temp = '';
    const swap = (first, second) => {
      let newFirst = first;
      let newSecond = second;
      temp = first;
      newFirst = second;
      newSecond = temp;
      return [newFirst, newSecond];
    };

    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (compareFunction(this[i].toString(), this[j].toString()) > 0) {
          [this[i], this[j]] = swap(this[i], this[j]);
        }
      }
    }

    return this;
  };
}
applyCustomSort();

module.exports = applyCustomSort;
