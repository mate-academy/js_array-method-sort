'use strict';

/**
 * Implement method Sort
 */

function applyCustomSort() {
  const defaultComapre = (a, b) =>
    ((`${a}` > `${b}`) ? 1 : `${a}` < `${b}` ? -1 : 0);

  [].__proto__.sort2 = function(compareFunction = defaultComapre) {
    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - 1; j++) {
        if (compareFunction(this[j], this[j + 1]) > 0) {
          const tmp = this[j];

          this[j] = this[j + 1];
          this[j + 1] = tmp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
