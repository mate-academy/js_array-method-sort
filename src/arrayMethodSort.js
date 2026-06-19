'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    // write code here

    let min = 0;

    const condition = compareFunction;

    for (let i = 0; i < this.length - 1; i++) {
      min = i;

      for (let j = i + 1; j < this.length; j++) {
        if (compareFunction === undefined) {
          if (this[j].toString() < this[min].toString()) {
            min = j;
          }
        }

        if (compareFunction !== undefined) {
          if (condition(this[j], this[min]) < 0) {
            min = j;
          }
        }
      }

      const element = this[min];

      this[min] = this[i];

      this[i] = element;
    }

    return this;
  };
}

module.exports = applyCustomSort;
