'use strict';

/*
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction = undefined) {
    const myOwnCompare =
      compareFunction || ((a, b) => (a.toString() > b.toString() ? 1 : -1));

    for (let i = 0; i < this.length - 1; i++) {
      for (let k = 0; k < this.length - 1 - i; k++) {
        if (myOwnCompare(this[k], this[k + 1]) > 0) {
          const elem = this[k];

          this[k] = this[k + 1];
          this[k + 1] = elem;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
