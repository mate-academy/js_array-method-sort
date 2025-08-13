'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    for (let i = 0; i < this.length; i++) {
      for (let ii = 1; ii < this.length; ii++) {
        const theSmallest = this[ii - 1];
        let swapOrNot;

        if (compareFunction === undefined) {
          swapOrNot = Number(String(this[ii - 1]) > String(this[ii]));
        } else {
          swapOrNot = compareFunction(this[ii - 1], this[ii]);
        }

        if (swapOrNot > 0) {
          this[ii - 1] = this[ii];
          this[ii] = theSmallest;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
