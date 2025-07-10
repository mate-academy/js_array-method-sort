'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const defaultCompare = (a, b) => {
      return a.toString() > b.toString();
    };

    const compare = compareFunction || defaultCompare;

    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - 1 - i; j++) {
        if (compare(this[j], this[j + 1]) > 0) {
          [this[j], this[j + 1]] = [this[j + 1], this[j]];
        }
      }
    }

    return this;

    // let buffer = 0;

    // for (let i = 0; i < this.length; i++) {
    //   for (let j = 1; j < this.length; j++) {
    //     if (this[i] - this[j] > 0) {
    //       buffer = this[j];
    //       this[j] = this[i];
    //       this[i] = buffer;
    //     }
    //   }
    // }
  };
}

module.exports = applyCustomSort;
