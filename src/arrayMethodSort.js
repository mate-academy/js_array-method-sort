'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (
    compareFunction = (a, b) => (a.toString() > b.toString() ? 1 : -1),
  ) {
    for (let i = 0; i < this.length; i++) {
      let min = i;

      for (let j = i + 1; j < this.length; j++) {
        if (compareFunction(this[min], this[j]) > 0) {
          min = j;
        }
      }

      [this[i], this[min]] = [this[min], this[i]];
    }

    return this;
  };
}

module.exports = applyCustomSort;
