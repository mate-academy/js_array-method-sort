'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    let shouldSwap = false;
    let temp = 0;

    if (compareFunction === undefined) {
      for (let i = 1; i < this.length; i++) {
        for (let o = 0; o < this.length - 1; o++) {
          if (String(this[o]) > String(this[o + 1])) {
            shouldSwap = true;

            if (shouldSwap) {
              temp = this[o];
              this[o] = this[o + 1];
              this[o + 1] = temp;
            }
            shouldSwap = false;
          }
        }
      }
    } else {
      for (let i = 1; i < this.length; i++) {
        for (let o = 0; o < this.length - 1; o++) {
          if (compareFunction(this[o], this[o + 1]) > 0) {
            shouldSwap = true;

            if (shouldSwap) {
              temp = this[o];
              this[o] = this[o + 1];
              this[o + 1] = temp;
            }
            shouldSwap = false;
          }
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
